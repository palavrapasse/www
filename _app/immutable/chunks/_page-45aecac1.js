import { a as loadedFormatters, i as initFormatters, b as loadedLocales, c as detectLocale, s as setLocale } from "./santos-e4584ab0.js";
import { _ as __vitePreload } from "./preload-helper-f8376bb0.js";
const localeTranslationLoaders = {
  en: () => __vitePreload(() => import("./index-d8ef29cb.js"), true ? [] : void 0, import.meta.url),
  pt: () => __vitePreload(() => import("./index-8f3a9a8a.js"), true ? [] : void 0, import.meta.url)
};
const updateDictionary = (locale, dictionary) => loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary };
const importLocaleAsync = async (locale) => (await localeTranslationLoaders[locale]()).default;
const loadLocaleAsync = async (locale) => {
  updateDictionary(locale, await importLocaleAsync(locale));
  loadFormatters(locale);
};
const loadFormatters = (locale) => void (loadedFormatters[locale] = initFormatters());
const load = async () => {
  const locale = detectLocale();
  await loadLocaleAsync(locale);
  setLocale(locale);
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  _page as _,
  load as l
};
