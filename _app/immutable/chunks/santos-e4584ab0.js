import { w as writable, d as derived } from "./index-f0dcb114.js";
var removeEmptyValues = (object) => Object.fromEntries(
  Object.entries(object).map(([key, value]) => key !== "i" && value && value != "0" && [key, value]).filter(Boolean)
);
var trimAllValues = (part) => Object.fromEntries(
  Object.keys(part).map((key) => {
    const val = part[key];
    return [
      key,
      Array.isArray(val) ? val.map((v) => v == null ? void 0 : v.trim()) : val === !!val ? val : val == null ? void 0 : val.trim()
    ];
  })
);
var parseArgumentPart = (text) => {
  const [keyPart = "", ...formatterKeys] = text.split("|");
  const [keyWithoutType = "", type] = keyPart.split(":");
  const [key, isOptional] = keyWithoutType.split("?");
  return { k: key, i: type, n: isOptional === "", f: formatterKeys };
};
var parsePluralPart = (content, lastAccessor) => {
  let [key, values] = content.split(":");
  if (!values) {
    values = key;
    key = lastAccessor;
  }
  const entries = values.split("|");
  const [zero, one, two, few, many, rest] = entries;
  const nrOfEntries = entries.filter((entry) => entry !== void 0).length;
  if (nrOfEntries === 1) {
    return { k: key, r: zero };
  }
  if (nrOfEntries === 2) {
    return { k: key, o: zero, r: one };
  }
  if (nrOfEntries === 3) {
    return { k: key, z: zero, o: one, r: two };
  }
  return { k: key, z: zero, o: one, t: two, f: few, m: many, r: rest };
};
var REGEX_BRACKETS_SPLIT = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g;
var removeOuterBrackets = (text) => text.substring(1, text.length - 1);
var parseRawText = (rawText, optimize = true, firstKey = "", lastKey = "") => rawText.split(REGEX_BRACKETS_SPLIT).map((part) => {
  if (!part.match(REGEX_BRACKETS_SPLIT)) {
    return part;
  }
  const content = removeOuterBrackets(part);
  if (content.startsWith("{")) {
    return parsePluralPart(removeOuterBrackets(content), lastKey);
  }
  const parsedPart = parseArgumentPart(content);
  lastKey = parsedPart.k || lastKey;
  !firstKey && (firstKey = lastKey);
  return parsedPart;
}).map((part) => {
  if (typeof part === "string")
    return part;
  if (!part.k)
    part.k = firstKey || "0";
  const trimmed = trimAllValues(part);
  return optimize ? removeEmptyValues(trimmed) : trimmed;
});
var isPluralPart = (part) => !!(part.o || part.r);
var REGEX_SWITCH_CASE = /^\{.*\}$/;
var applyFormatters = (formatters, formatterKeys, initialValue) => formatterKeys.reduce(
  (value, formatterKey) => {
    var _a, _b;
    return (_b = formatterKey.match(REGEX_SWITCH_CASE) ? (() => {
      var _a2;
      const cases = Object.fromEntries(
        removeOuterBrackets(formatterKey).split(",").map((part) => part.split(":")).reduce((accumulator, entry) => {
          if (entry.length === 2) {
            return [...accumulator, entry.map((entry2) => entry2.trim())];
          }
          accumulator[accumulator.length - 1][1] += "," + entry[0];
          return accumulator;
        }, [])
      );
      return (_a2 = cases[value]) != null ? _a2 : cases["*"];
    })() : (_a = formatters[formatterKey]) == null ? void 0 : _a.call(formatters, value)) != null ? _b : value;
  },
  initialValue
);
var getPlural = (pluralRules, { z, o, t, f, m, r }, value) => {
  switch (z && value == 0 ? "zero" : pluralRules.select(value)) {
    case "zero":
      return z;
    case "one":
      return o;
    case "two":
      return t;
    case "few":
      return f;
    case "many":
      return m;
    default:
      return r;
  }
};
var REGEX_PLURAL_VALUE_INJECTION = /\?\?/g;
var applyArguments = (textParts, pluralRules, formatters, args) => textParts.map((part) => {
  if (typeof part === "string") {
    return part;
  }
  const { k: key = "0", f: formatterKeys = [] } = part;
  const value = args[key];
  if (isPluralPart(part)) {
    return ((typeof value === "boolean" ? value ? part.o : part.r : getPlural(pluralRules, part, value)) || "").replace(REGEX_PLURAL_VALUE_INJECTION, value);
  }
  const formattedValue = formatterKeys.length ? applyFormatters(formatters, formatterKeys, value) : value;
  return ("" + (formattedValue != null ? formattedValue : "")).trim();
}).join("");
var translate = (textParts, pluralRules, formatters, args) => {
  const firstArg = args[0];
  const isObject = firstArg && typeof firstArg === "object" && firstArg.constructor === Object;
  const transformedArgs = args.length === 1 && isObject ? firstArg : args;
  return applyArguments(textParts, pluralRules, formatters, transformedArgs);
};
var getFallbackProxy = () => new Proxy(Object.assign(() => "", {}), {
  get: (_target, key) => key === "length" ? 0 : getFallbackProxy()
});
var getPartsFromString = (cache, text) => cache[text] || (cache[text] = parseRawText(text));
var getTranslateInstance = (locale2, formatters) => {
  const cache = {};
  const pluralRules = new Intl.PluralRules(locale2);
  return (text, ...args) => translate(getPartsFromString(cache, text), pluralRules, formatters, args);
};
function i18nObject(locale2, translations, formatters = {}) {
  return createProxy(translations, getTranslateInstance(locale2, formatters));
}
var wrap = (proxyObject = {}, translateFn) => typeof proxyObject === "string" ? translateFn.bind(null, proxyObject) : Object.assign(
  Object.defineProperty(() => "", "name", { writable: true }),
  proxyObject
);
var createProxy = (proxyObject, translateFn) => new Proxy(wrap(proxyObject, translateFn), {
  get: (target, key) => {
    if (key === Symbol.iterator)
      return [][Symbol.iterator].bind(Object.values(target).map((entry) => wrap(entry, translateFn)));
    return createProxy(target[key], translateFn);
  }
});
var initI18nSvelte = (translations, formatters = {}) => {
  const _locale = writable();
  const _LL = writable(getFallbackProxy());
  const locale2 = derived(_locale, (newLocale, set) => set(newLocale));
  const LL2 = new Proxy({}, {
    get: (_target, key) => key === "subscribe" ? _LL.subscribe : _LL[key]
  });
  const setLocale2 = (newLocale) => {
    _locale.set(newLocale);
    _LL.set(i18nObject(newLocale, translations[newLocale], formatters[newLocale]));
  };
  return {
    locale: locale2,
    LL: LL2,
    setLocale: setLocale2
  };
};
var p = (e) => !!e;
var n = (e) => Array.from(new Set(e));
var Nr = (e, o, ...s) => {
  for (let i of s) {
    let t = l(o, i);
    if (t)
      return t;
  }
  return e;
}, l = (e, o) => {
  let s = o().map((r) => r.toLowerCase()), i = n(s.flatMap((r) => [r, r.split("-")[0]])), t = e.map((r) => r.toLowerCase());
  return i.map((r) => {
    let c = t.findIndex((x) => x === r);
    return c >= 0 && e[c];
  }).find(p);
};
const baseLocale = "pt";
const locales = ["en", "pt"];
const loadedLocales = {};
const loadedFormatters = {};
const detectLocale = (...detectors) => Nr(baseLocale, locales, ...detectors);
const { locale, LL, setLocale } = initI18nSvelte(loadedLocales, loadedFormatters);
const initFormatters = (locale2) => {
  const formatters = {
    date: dateFormatter
  };
  return formatters;
};
function dateFormatter(date) {
  return date.toLocaleDateString();
}
class FetchClient {
  constructor(baseUrl2) {
    this.baseUrl = baseUrl2;
  }
  get(endpoint, query) {
    const request = {
      url: this.resolveUrl(this.baseUrl, endpoint, query),
      method: Method.get,
      query
    };
    return this.request(request);
  }
  request(request) {
    const url = request.url;
    const fetchRequest = {
      method: request.method
    };
    return fetch(url, fetchRequest);
  }
  resolveUrl(baseUrl2, endpoint, query) {
    let url = `${baseUrl2}/${endpoint}`.replaceAll(new RegExp("(?<!:)\\/{2,}", "g"), "/");
    if (query) {
      url = `${url}?${new URLSearchParams(query)}`;
    }
    return url;
  }
}
var Method = /* @__PURE__ */ ((Method2) => {
  Method2["get"] = "GET";
  return Method2;
})(Method || {});
const baseUrl = new URL("https://api.palavrapasse.pt");
const leaksEndpoint = "leaks";
class SantosClient extends FetchClient {
  constructor() {
    super(baseUrl);
  }
}
export {
  LL as L,
  SantosClient as S,
  loadedFormatters as a,
  loadedLocales as b,
  detectLocale as c,
  dateFormatter as d,
  initFormatters as i,
  leaksEndpoint as l,
  setLocale as s
};
