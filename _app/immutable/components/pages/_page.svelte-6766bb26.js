import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, M as svg_element, l as claim_element, m as children, r as claim_text, c as claim_space, N as claim_svg_element, h as detach, n as attr, b as insert_hydration, K as append_hydration, O as listen, F as is_function, u as set_data, C as noop, P as destroy_each, E as run_all, Q as src_url_equal, e as empty, L as component_subscribe, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, R as set_input_value, v as binding_callbacks, T as bind, U as prevent_default, V as add_flush_callback, d as check_outros, g as group_outros } from "../../chunks/index-8785c334.js";
import { l as leaksEndpoint, d as dateFormatter, L as LL, S as SantosClient } from "../../chunks/santos-e4584ab0.js";
import { b as base } from "../../chunks/paths-69ad0af0.js";
import { w as writable } from "../../chunks/index-f0dcb114.js";
const app = "";
class SantosQueryImpl {
  constructor(client) {
    this.client = client;
  }
  async leaks(target, affected) {
    const query = {
      target,
      affected
    };
    try {
      const response = await this.client.get(leaksEndpoint, query);
      return response.status == 200 ? response.json() : Promise.resolve(response.status);
    } catch (err) {
      console.error(err);
      return 500;
    }
  }
}
const combolistLeakContext = "COMBOLIST";
const defaultLeakShareDate = new Date(0);
function isDefaultShareDate(shareDate) {
  return shareDate.getTime() === defaultLeakShareDate.getTime();
}
function isCombolistContext(context) {
  return context.toUpperCase().includes(combolistLeakContext);
}
var Target = /* @__PURE__ */ ((Target2) => {
  Target2["all"] = "all";
  Target2["newest"] = "newest";
  Target2["oldest"] = "oldest";
  return Target2;
})(Target || {});
function i18nTarget(LL2, target) {
  switch (target) {
    case Target.all:
      return LL2.all();
    case Target.newest:
      return LL2.newest();
    case Target.oldest:
      return LL2.oldest();
  }
}
function i18nLeakShareDate(LL2, date) {
  if (isDefaultShareDate(date)) {
    return LL2.unknown();
  } else {
    return dateFormatter(date);
  }
}
function create_fragment$a(ctx) {
  let span;
  let t0;
  let t1;
  let button;
  let svg;
  let path;
  let span_id_value;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      t0 = text(
        /*value*/
        ctx[1]
      );
      t1 = space();
      button = element("button");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { id: true, class: true });
      var span_nodes = children(span);
      t0 = claim_text(
        span_nodes,
        /*value*/
        ctx[1]
      );
      t1 = claim_space(span_nodes);
      button = claim_element(span_nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      svg = claim_svg_element(button_nodes, "svg", {
        "aria-hidden": true,
        class: true,
        fill: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "fill-rule": true,
        d: true,
        "clip-rule": true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "aria-hidden", "true");
      attr(svg, "class", "w-3.5 h-3.5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(button, "type", "button");
      attr(button, "class", "inline-flex items-center p-0.5 ml-2 bg-transparent rounded-sm");
      attr(span, "id", span_id_value = "badge-" + /*id*/
      ctx[0]);
      attr(span, "class", "badge badge-primary");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, button);
      append_hydration(button, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(
            /*onRemoveCallback*/
            ctx[2]
          ))
            ctx[2].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & /*value*/
      2)
        set_data(
          t0,
          /*value*/
          ctx[1]
        );
      if (dirty & /*id*/
      1 && span_id_value !== (span_id_value = "badge-" + /*id*/
      ctx[0])) {
        attr(span, "id", span_id_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { id } = $$props;
  let { value } = $$props;
  let { onRemoveCallback } = $$props;
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(0, id = $$props2.id);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
    if ("onRemoveCallback" in $$props2)
      $$invalidate(2, onRemoveCallback = $$props2.onRemoveCallback);
  };
  return [id, value, onRemoveCallback];
}
class Badge extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$a, safe_not_equal, { id: 0, value: 1, onRemoveCallback: 2 });
  }
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i][0];
  child_ctx[11] = list[i][1];
  return child_ctx;
}
function create_each_block$2(ctx) {
  let div;
  let t0_value = (
    /*valueLabel*/
    ctx[11] + ""
  );
  let t0;
  let t1;
  let div_class_value;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[7](
        /*value*/
        ctx[10]
      )
    );
  }
  function keyup_handler() {
    return (
      /*keyup_handler*/
      ctx[8](
        /*value*/
        ctx[10]
      )
    );
  }
  function mousedown_handler() {
    return (
      /*mousedown_handler*/
      ctx[9](
        /*value*/
        ctx[10]
      )
    );
  }
  return {
    c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, t0_value);
      t1 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "dropdown-item text-sm " + /*value*/
      (ctx[10] === /*selectedValue*/
      ctx[2] ? "dropdown-active" : ""));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
      if (!mounted) {
        dispose = [
          listen(div, "click", click_handler),
          listen(div, "keyup", keyup_handler),
          listen(div, "mousedown", mousedown_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*values*/
      2 && t0_value !== (t0_value = /*valueLabel*/
      ctx[11] + ""))
        set_data(t0, t0_value);
      if (dirty & /*values, selectedValue*/
      6 && div_class_value !== (div_class_value = "dropdown-item text-sm " + /*value*/
      (ctx[10] === /*selectedValue*/
      ctx[2] ? "dropdown-active" : ""))) {
        attr(div, "class", div_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$9(ctx) {
  let div1;
  let label_1;
  let t0;
  let t1;
  let div0;
  let each_value = (
    /*values*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  return {
    c() {
      div1 = element("div");
      label_1 = element("label");
      t0 = text(
        /*label*/
        ctx[0]
      );
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      label_1 = claim_element(div1_nodes, "LABEL", { class: true, tabindex: true, for: true });
      var label_1_nodes = children(label_1);
      t0 = claim_text(
        label_1_nodes,
        /*label*/
        ctx[0]
      );
      label_1_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label_1, "class", "btn");
      attr(label_1, "tabindex", "-1");
      attr(
        label_1,
        "for",
        /*dropdownId*/
        ctx[3]
      );
      attr(div0, "class", "dropdown-menu dropdown-menu-bottom-right gap-1");
      attr(
        div1,
        "id",
        /*dropdownId*/
        ctx[3]
      );
      attr(div1, "class", "dropdown");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, label_1);
      append_hydration(label_1, t0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*label*/
      1)
        set_data(
          t0,
          /*label*/
          ctx2[0]
        );
      if (dirty & /*values, selectedValue, setSelectedValue*/
      22) {
        each_value = /*values*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { id } = $$props;
  let { label } = $$props;
  let { values } = $$props;
  let { onValueChange } = $$props;
  let selectedValue;
  const dropdownId = `dropdown-${id}`;
  function setSelectedValue(value) {
    $$invalidate(2, selectedValue = value);
  }
  const click_handler = (value) => setSelectedValue(value);
  const keyup_handler = (value) => setSelectedValue(value);
  const mousedown_handler = (value) => setSelectedValue(value);
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(5, id = $$props2.id);
    if ("label" in $$props2)
      $$invalidate(0, label = $$props2.label);
    if ("values" in $$props2)
      $$invalidate(1, values = $$props2.values);
    if ("onValueChange" in $$props2)
      $$invalidate(6, onValueChange = $$props2.onValueChange);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*selectedValue, onValueChange*/
    68) {
      {
        if (selectedValue) {
          onValueChange(selectedValue);
        }
      }
    }
  };
  return [
    label,
    values,
    selectedValue,
    dropdownId,
    setSelectedValue,
    id,
    onValueChange,
    click_handler,
    keyup_handler,
    mousedown_handler
  ];
}
class Dropdown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$9, safe_not_equal, {
      id: 5,
      label: 0,
      values: 1,
      onValueChange: 6
    });
  }
}
function create_fragment$8(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        id: true,
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h() {
      attr(img, "id", "fire-illustration");
      attr(img, "class", "h-96");
      if (!src_url_equal(img.src, img_src_value = base + "/svg/chubby_fire.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "cartoonish character with his head on fire showing an anger face");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
class Fire_illustration extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$8, safe_not_equal, {});
  }
}
function create_fragment$7(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        id: true,
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h() {
      attr(img, "id", "hello-illustration");
      attr(img, "class", "h-96");
      if (!src_url_equal(img.src, img_src_value = base + "/svg/chubby_hello.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "cartoonish character saying hello");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
class Hello_illustration extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$7, safe_not_equal, {});
  }
}
function create_fragment$6(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        id: true,
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h() {
      attr(img, "id", "nope-illustration");
      attr(img, "class", "h-96");
      if (!src_url_equal(img.src, img_src_value = base + "/svg/chubby_nope.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "cartoonish character raising his arms with a confused face");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
class Nope_illustration extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$6, safe_not_equal, {});
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_if_block_3$1(ctx) {
  let th;
  let t_value = (
    /*$LL*/
    ctx[3].leakEmail() + ""
  );
  let t;
  return {
    c() {
      th = element("th");
      t = text(t_value);
    },
    l(nodes) {
      th = claim_element(nodes, "TH", {});
      var th_nodes = children(th);
      t = claim_text(th_nodes, t_value);
      th_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
      append_hydration(th, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*$LL*/
      8 && t_value !== (t_value = /*$LL*/
      ctx2[3].leakEmail() + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(th);
    }
  };
}
function create_else_block$1(ctx) {
  let t_value = (
    /*leak*/
    ctx[5].context + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*leaks*/
      2 && t_value !== (t_value = /*leak*/
      ctx2[5].context + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_2$1(ctx) {
  let t0_value = (
    /*leak*/
    ctx[5].context + ""
  );
  let t0;
  let t1;
  return {
    c() {
      t0 = text(t0_value);
      t1 = text(" *");
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_text(nodes, " *");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*leaks*/
      2 && t0_value !== (t0_value = /*leak*/
      ctx2[5].context + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_if_block_1$1(ctx) {
  let td;
  let t_value = (
    /*leak*/
    ctx[5].email + ""
  );
  let t;
  return {
    c() {
      td = element("td");
      t = text(t_value);
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      t = claim_text(td_nodes, t_value);
      td_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*leaks*/
      2 && t_value !== (t_value = /*leak*/
      ctx2[5].email + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_each_block$1(ctx) {
  let tr;
  let td0;
  let show_if;
  let t0;
  let td1;
  let t1_value = i18nLeakShareDate(
    /*$LL*/
    ctx[3],
    new Date(
      /*leak*/
      ctx[5].shareDateMSEpoch
    )
  ) + "";
  let t1;
  let t2;
  let t3;
  function select_block_type(ctx2, dirty) {
    if (dirty & /*leaks*/
    2)
      show_if = null;
    if (show_if == null)
      show_if = !!isCombolistContext(
        /*leak*/
        ctx2[5].context
      );
    if (show_if)
      return create_if_block_2$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*includeEmail*/
    ctx[2] && create_if_block_1$1(ctx)
  );
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      if_block0.c();
      t0 = space();
      td1 = element("td");
      t1 = text(t1_value);
      t2 = space();
      if (if_block1)
        if_block1.c();
      t3 = space();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      if_block0.l(td0_nodes);
      td0_nodes.forEach(detach);
      t0 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t1 = claim_text(td1_nodes, t1_value);
      td1_nodes.forEach(detach);
      t2 = claim_space(tr_nodes);
      if (if_block1)
        if_block1.l(tr_nodes);
      t3 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      if_block0.m(td0, null);
      append_hydration(tr, t0);
      append_hydration(tr, td1);
      append_hydration(td1, t1);
      append_hydration(tr, t2);
      if (if_block1)
        if_block1.m(tr, null);
      append_hydration(tr, t3);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(td0, null);
        }
      }
      if (dirty & /*$LL, leaks*/
      10 && t1_value !== (t1_value = i18nLeakShareDate(
        /*$LL*/
        ctx2[3],
        new Date(
          /*leak*/
          ctx2[5].shareDateMSEpoch
        )
      ) + ""))
        set_data(t1, t1_value);
      if (
        /*includeEmail*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          if_block1.m(tr, t3);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_if_block$1(ctx) {
  let p;
  let t_value = (
    /*$LL*/
    ctx[3].combolistExplanation() + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-start w-full");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*$LL*/
      8 && t_value !== (t_value = /*$LL*/
      ctx2[3].combolistExplanation() + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment$5(ctx) {
  let div;
  let table;
  let thead;
  let tr;
  let th0;
  let t0_value = (
    /*$LL*/
    ctx[3].leakContext() + ""
  );
  let t0;
  let t1;
  let th1;
  let t2_value = (
    /*$LL*/
    ctx[3].leakShareDate() + ""
  );
  let t2;
  let t3;
  let t4;
  let tbody;
  let table_id_value;
  let t5;
  let if_block1_anchor;
  let if_block0 = (
    /*includeEmail*/
    ctx[2] && create_if_block_3$1(ctx)
  );
  let each_value = (
    /*leaks*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  let if_block1 = (
    /*includesCombolistContext*/
    ctx[4] && create_if_block$1(ctx)
  );
  return {
    c() {
      div = element("div");
      table = element("table");
      thead = element("thead");
      tr = element("tr");
      th0 = element("th");
      t0 = text(t0_value);
      t1 = space();
      th1 = element("th");
      t2 = text(t2_value);
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t5 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      table = claim_element(div_nodes, "TABLE", { id: true, class: true });
      var table_nodes = children(table);
      thead = claim_element(table_nodes, "THEAD", {});
      var thead_nodes = children(thead);
      tr = claim_element(thead_nodes, "TR", {});
      var tr_nodes = children(tr);
      th0 = claim_element(tr_nodes, "TH", {});
      var th0_nodes = children(th0);
      t0 = claim_text(th0_nodes, t0_value);
      th0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", {});
      var th1_nodes = children(th1);
      t2 = claim_text(th1_nodes, t2_value);
      th1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      if (if_block0)
        if_block0.l(tr_nodes);
      tr_nodes.forEach(detach);
      thead_nodes.forEach(detach);
      t4 = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", {});
      var tbody_nodes = children(tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tbody_nodes);
      }
      tbody_nodes.forEach(detach);
      table_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t5 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(table, "id", table_id_value = "leaks-query-table-" + /*id*/
      ctx[0]);
      attr(table, "class", "table");
      attr(div, "class", "flex w-full overflow-x-auto");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, table);
      append_hydration(table, thead);
      append_hydration(thead, tr);
      append_hydration(tr, th0);
      append_hydration(th0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, th1);
      append_hydration(th1, t2);
      append_hydration(tr, t3);
      if (if_block0)
        if_block0.m(tr, null);
      append_hydration(table, t4);
      append_hydration(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      insert_hydration(target, t5, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$LL*/
      8 && t0_value !== (t0_value = /*$LL*/
      ctx2[3].leakContext() + ""))
        set_data(t0, t0_value);
      if (dirty & /*$LL*/
      8 && t2_value !== (t2_value = /*$LL*/
      ctx2[3].leakShareDate() + ""))
        set_data(t2, t2_value);
      if (
        /*includeEmail*/
        ctx2[2]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_3$1(ctx2);
          if_block0.c();
          if_block0.m(tr, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & /*leaks, includeEmail, i18nLeakShareDate, $LL, Date, isCombolistContext*/
      14) {
        each_value = /*leaks*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(tbody, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*id*/
      1 && table_id_value !== (table_id_value = "leaks-query-table-" + /*id*/
      ctx2[0])) {
        attr(table, "id", table_id_value);
      }
      if (
        /*includesCombolistContext*/
        ctx2[4]
      )
        if_block1.p(ctx2, dirty);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t5);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $LL;
  component_subscribe($$self, LL, ($$value) => $$invalidate(3, $LL = $$value));
  let { id } = $$props;
  let { leaks } = $$props;
  let { includeEmail } = $$props;
  const includesCombolistContext = leaks.find((l) => isCombolistContext(l.context)) !== void 0;
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(0, id = $$props2.id);
    if ("leaks" in $$props2)
      $$invalidate(1, leaks = $$props2.leaks);
    if ("includeEmail" in $$props2)
      $$invalidate(2, includeEmail = $$props2.includeEmail);
  };
  return [id, leaks, includeEmail, $LL, includesCombolistContext];
}
class Query_leaks_table extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$5, safe_not_equal, { id: 0, leaks: 1, includeEmail: 2 });
  }
}
function create_fragment$4(ctx) {
  let dropdown;
  let current;
  dropdown = new Dropdown({
    props: {
      id: "query-leaks-target",
      label: (
        /*$LL*/
        ctx[1].filter()
      ),
      values: (
        /*values*/
        ctx[2]
      ),
      onValueChange: (
        /*onValueChange*/
        ctx[0]
      )
    }
  });
  return {
    c() {
      create_component(dropdown.$$.fragment);
    },
    l(nodes) {
      claim_component(dropdown.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(dropdown, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const dropdown_changes = {};
      if (dirty & /*$LL*/
      2)
        dropdown_changes.label = /*$LL*/
        ctx2[1].filter();
      if (dirty & /*onValueChange*/
      1)
        dropdown_changes.onValueChange = /*onValueChange*/
        ctx2[0];
      dropdown.$set(dropdown_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(dropdown.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dropdown.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(dropdown, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $LL;
  component_subscribe($$self, LL, ($$value) => $$invalidate(1, $LL = $$value));
  let { onValueChange } = $$props;
  const values = Object.values(Target).map((t) => [t, i18nTarget($LL, t)]);
  $$self.$$set = ($$props2) => {
    if ("onValueChange" in $$props2)
      $$invalidate(0, onValueChange = $$props2.onValueChange);
  };
  return [onValueChange, $LL, values];
}
class Query_leaks_target_dropdown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$4, safe_not_equal, { onValueChange: 0 });
  }
}
function create_fragment$3(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        id: true,
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h() {
      attr(img, "id", "searching-illustration");
      attr(img, "class", "h-96");
      if (!src_url_equal(img.src, img_src_value = base + "/svg/chubby_searching.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "cartoonish character searching in his laptop");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
class Searching_illustration extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$3, safe_not_equal, {});
  }
}
function create_fragment$2(ctx) {
  let input;
  let input_id_value;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", {
        class: true,
        type: true,
        name: true,
        id: true
      });
      this.h();
    },
    h() {
      attr(input, "class", "input input-ghost-primary input-block");
      attr(input, "type", "search");
      attr(input, "name", "search-input");
      attr(input, "id", input_id_value = "search-input-" + /*id*/
      ctx[1]);
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*id*/
      2 && input_id_value !== (input_id_value = "search-input-" + /*id*/
      ctx2[1])) {
        attr(input, "id", input_id_value);
      }
      if (dirty & /*value*/
      1) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { id } = $$props;
  let { value } = $$props;
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  return [value, id, input_input_handler];
}
class Search_input extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, { id: 1, value: 0 });
  }
}
function create_fragment$1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        id: true,
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h() {
      attr(img, "id", "thumbs-up-illustration");
      attr(img, "class", "h-96");
      if (!src_url_equal(img.src, img_src_value = base + "/svg/chubby_yay.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "cartoonish character doing a thumbs up");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
class Thumbs_up_illustration extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
var State = /* @__PURE__ */ ((State2) => {
  State2[State2["initial"] = 0] = "initial";
  State2[State2["loading"] = 1] = "loading";
  State2[State2["success"] = 2] = "success";
  State2[State2["failure"] = 3] = "failure";
  State2[State2["throttled"] = 4] = "throttled";
  return State2;
})(State || {});
function from(value, state) {
  return {
    value,
    state,
    loading: state == 1,
    success: state == 2,
    failure: state == 3,
    throttled: state == 4
    /* throttled */
  };
}
function createStore() {
  const store = writable({});
  return {
    set: store.set,
    subscribe: store.subscribe,
    update: store.update,
    state: State.initial
  };
}
function onLoading(store, action) {
  return updateState(store, State.loading, action);
}
function onFailure(store) {
  return updateState(store, State.failure);
}
function onThrottled(store) {
  return updateState(store, State.throttled);
}
function updateState(store, state, action) {
  store.update((s) => from(s.value, state));
  store.state = state;
  return action == null ? void 0 : action();
}
function setInitial(store, value) {
  return setState(store, value, State.initial);
}
function setSuccess(store, value) {
  return setState(store, value, State.success);
}
function setState(store, value, state) {
  const typedState = from(value, state);
  store.state = state;
  return store.set(typedState);
}
const QueryLeaksStore = createQueryStore();
function createQueryStore() {
  const store = createStore();
  const subscribe = store.subscribe;
  const santosQuery = new SantosQueryImpl(new SantosClient());
  return {
    subscribe,
    affected: (affected, target) => onAffectedEvent(store, santosQuery, affected, target),
    reset: () => onResetEvent(store)
  };
}
function onAffectedEvent(store, query, affected, target) {
  if (store.state != State.loading) {
    return onLoading(
      store,
      () => query.leaks(target, affected).then((ql) => processClientResult(store, ql))
    );
  }
}
function processClientResult(store, res) {
  if (typeof res === "number") {
    if (res === 429) {
      onThrottled(store);
    } else {
      onFailure(store);
    }
  } else {
    setSuccess(store, res);
  }
}
function onResetEvent(store) {
  return setInitial(store, {});
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}
function create_if_block_6(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*affected*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*affected, removeFromAffectedQuery*/
      66) {
        each_value = /*affected*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block(ctx) {
  let badge;
  let current;
  function func() {
    return (
      /*func*/
      ctx[9](
        /*email*/
        ctx[11]
      )
    );
  }
  badge = new Badge({
    props: {
      id: (
        /*email*/
        ctx[11]
      ),
      value: (
        /*email*/
        ctx[11]
      ),
      onRemoveCallback: func
    }
  });
  return {
    c() {
      create_component(badge.$$.fragment);
    },
    l(nodes) {
      claim_component(badge.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(badge, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const badge_changes = {};
      if (dirty & /*affected*/
      2)
        badge_changes.id = /*email*/
        ctx[11];
      if (dirty & /*affected*/
      2)
        badge_changes.value = /*email*/
        ctx[11];
      if (dirty & /*affected*/
      2)
        badge_changes.onRemoveCallback = func;
      badge.$set(badge_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(badge.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(badge.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(badge, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let helloillustration;
  let current;
  helloillustration = new Hello_illustration({});
  return {
    c() {
      create_component(helloillustration.$$.fragment);
    },
    l(nodes) {
      claim_component(helloillustration.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(helloillustration, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(helloillustration.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(helloillustration.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(helloillustration, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let nopeillustration;
  let t0;
  let p;
  let t1_value = (
    /*$LL*/
    ctx[3].throttledState() + ""
  );
  let t1;
  let current;
  nopeillustration = new Nope_illustration({});
  return {
    c() {
      create_component(nopeillustration.$$.fragment);
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
    },
    l(nodes) {
      claim_component(nopeillustration.$$.fragment, nodes);
      t0 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      mount_component(nopeillustration, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*$LL*/
      8) && t1_value !== (t1_value = /*$LL*/
      ctx2[3].throttledState() + ""))
        set_data(t1, t1_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(nopeillustration.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(nopeillustration.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(nopeillustration, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_3(ctx) {
  let fireillustration;
  let t0;
  let p;
  let t1_value = (
    /*$LL*/
    ctx[3].failureState() + ""
  );
  let t1;
  let current;
  fireillustration = new Fire_illustration({});
  return {
    c() {
      create_component(fireillustration.$$.fragment);
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
    },
    l(nodes) {
      claim_component(fireillustration.$$.fragment, nodes);
      t0 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      mount_component(fireillustration, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*$LL*/
      8) && t1_value !== (t1_value = /*$LL*/
      ctx2[3].failureState() + ""))
        set_data(t1, t1_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(fireillustration.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fireillustration.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(fireillustration, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_2(ctx) {
  let searchingillustration;
  let t0;
  let p;
  let t1_value = (
    /*$LL*/
    ctx[3].loadingState() + ""
  );
  let t1;
  let current;
  searchingillustration = new Searching_illustration({});
  return {
    c() {
      create_component(searchingillustration.$$.fragment);
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
    },
    l(nodes) {
      claim_component(searchingillustration.$$.fragment, nodes);
      t0 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      mount_component(searchingillustration, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*$LL*/
      8) && t1_value !== (t1_value = /*$LL*/
      ctx2[3].loadingState() + ""))
        set_data(t1, t1_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(searchingillustration.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(searchingillustration.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(searchingillustration, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*$QueryLeaksStore*/
      ctx2[4].value.length > 0
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block(ctx) {
  let t0_value = (
    /*$LL*/
    ctx[3].leaksQueryNotFoundResponse() + ""
  );
  let t0;
  let t1;
  let thumbsupillustration;
  let current;
  thumbsupillustration = new Thumbs_up_illustration({});
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
      create_component(thumbsupillustration.$$.fragment);
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
      claim_component(thumbsupillustration.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(thumbsupillustration, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*$LL*/
      8) && t0_value !== (t0_value = /*$LL*/
      ctx2[3].leaksQueryNotFoundResponse() + ""))
        set_data(t0, t0_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(thumbsupillustration.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(thumbsupillustration.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      destroy_component(thumbsupillustration, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let queryleakstable;
  let current;
  queryleakstable = new Query_leaks_table({
    props: {
      id: (
        /*value*/
        ctx[0]
      ),
      leaks: (
        /*$QueryLeaksStore*/
        ctx[4].value
      ),
      includeEmail: (
        /*affected*/
        ctx[1].length > 0 || /*value*/
        ctx[0].trim().length > 0
      )
    }
  });
  return {
    c() {
      create_component(queryleakstable.$$.fragment);
    },
    l(nodes) {
      claim_component(queryleakstable.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(queryleakstable, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const queryleakstable_changes = {};
      if (dirty & /*value*/
      1)
        queryleakstable_changes.id = /*value*/
        ctx2[0];
      if (dirty & /*$QueryLeaksStore*/
      16)
        queryleakstable_changes.leaks = /*$QueryLeaksStore*/
        ctx2[4].value;
      if (dirty & /*affected, value*/
      3)
        queryleakstable_changes.includeEmail = /*affected*/
        ctx2[1].length > 0 || /*value*/
        ctx2[0].trim().length > 0;
      queryleakstable.$set(queryleakstable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(queryleakstable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(queryleakstable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(queryleakstable, detaching);
    }
  };
}
function create_fragment(ctx) {
  let body;
  let div;
  let h1;
  let t0_value = (
    /*$LL*/
    ctx[3].homepageTitle() + ""
  );
  let t0;
  let t1;
  let h2;
  let t2_value = (
    /*$LL*/
    ctx[3].homepageDescription() + ""
  );
  let t2;
  let t3;
  let form;
  let queryleakstargetdropdown;
  let t4;
  let searchinput;
  let updating_value;
  let t5;
  let span;
  let t6_value = (
    /*$LL*/
    ctx[3].leakSearchHint() + ""
  );
  let t6;
  let t7;
  let section;
  let t8;
  let current_block_type_index;
  let if_block1;
  let current;
  let mounted;
  let dispose;
  queryleakstargetdropdown = new Query_leaks_target_dropdown({
    props: {
      onValueChange: (
        /*setLeaksTargetFilter*/
        ctx[7]
      )
    }
  });
  function searchinput_value_binding(value) {
    ctx[8](value);
  }
  let searchinput_props = { id: "affected-email" };
  if (
    /*value*/
    ctx[0] !== void 0
  ) {
    searchinput_props.value = /*value*/
    ctx[0];
  }
  searchinput = new Search_input({ props: searchinput_props });
  binding_callbacks.push(() => bind(searchinput, "value", searchinput_value_binding));
  let if_block0 = (
    /*affected*/
    ctx[1].length > 0 && create_if_block_6(ctx)
  );
  const if_block_creators = [
    create_if_block,
    create_if_block_2,
    create_if_block_3,
    create_if_block_4,
    create_if_block_5
  ];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$QueryLeaksStore*/
      ctx2[4].success && !/*isEditing*/
      ctx2[2]
    )
      return 0;
    if (
      /*$QueryLeaksStore*/
      ctx2[4].loading
    )
      return 1;
    if (
      /*$QueryLeaksStore*/
      ctx2[4].failure
    )
      return 2;
    if (
      /*$QueryLeaksStore*/
      ctx2[4].throttled
    )
      return 3;
    if (!/*isEditing*/
    ctx2[2] && /*affected*/
    ctx2[1].length === 0)
      return 4;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      body = element("body");
      div = element("div");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      h2 = element("h2");
      t2 = text(t2_value);
      t3 = space();
      form = element("form");
      create_component(queryleakstargetdropdown.$$.fragment);
      t4 = space();
      create_component(searchinput.$$.fragment);
      t5 = space();
      span = element("span");
      t6 = text(t6_value);
      t7 = space();
      section = element("section");
      if (if_block0)
        if_block0.c();
      t8 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      body = claim_element(nodes, "BODY", {});
      var body_nodes = children(body);
      div = claim_element(body_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, t0_value);
      h1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      h2 = claim_element(div_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, t2_value);
      h2_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      form = claim_element(div_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      claim_component(queryleakstargetdropdown.$$.fragment, form_nodes);
      t4 = claim_space(form_nodes);
      claim_component(searchinput.$$.fragment, form_nodes);
      form_nodes.forEach(detach);
      t5 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t6 = claim_text(span_nodes, t6_value);
      span_nodes.forEach(detach);
      t7 = claim_space(div_nodes);
      section = claim_element(div_nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      if (if_block0)
        if_block0.l(section_nodes);
      section_nodes.forEach(detach);
      t8 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      body_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-2xl sm:text-4xl h-12 text-center");
      attr(h2, "class", "text-lg sm:text-xl h-16 text-center");
      attr(form, "class", "h-14 w-full text-center flex flex-row");
      attr(span, "class", "text-center");
      attr(section, "class", "flex-row");
      attr(div, "class", "md:container md:mx-auto flex flex-col items-center");
    },
    m(target, anchor) {
      insert_hydration(target, body, anchor);
      append_hydration(body, div);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, t1);
      append_hydration(div, h2);
      append_hydration(h2, t2);
      append_hydration(div, t3);
      append_hydration(div, form);
      mount_component(queryleakstargetdropdown, form, null);
      append_hydration(form, t4);
      mount_component(searchinput, form, null);
      append_hydration(div, t5);
      append_hydration(div, span);
      append_hydration(span, t6);
      append_hydration(div, t7);
      append_hydration(div, section);
      if (if_block0)
        if_block0.m(section, null);
      append_hydration(div, t8);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(form, "submit", prevent_default(
          /*searchAffected*/
          ctx[5]
        ));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*$LL*/
      8) && t0_value !== (t0_value = /*$LL*/
      ctx2[3].homepageTitle() + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & /*$LL*/
      8) && t2_value !== (t2_value = /*$LL*/
      ctx2[3].homepageDescription() + ""))
        set_data(t2, t2_value);
      const searchinput_changes = {};
      if (!updating_value && dirty & /*value*/
      1) {
        updating_value = true;
        searchinput_changes.value = /*value*/
        ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      searchinput.$set(searchinput_changes);
      if ((!current || dirty & /*$LL*/
      8) && t6_value !== (t6_value = /*$LL*/
      ctx2[3].leakSearchHint() + ""))
        set_data(t6, t6_value);
      if (
        /*affected*/
        ctx2[1].length > 0
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*affected*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_6(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(section, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block1) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block1 = if_blocks[current_block_type_index];
          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        } else {
          if_block1 = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(queryleakstargetdropdown.$$.fragment, local);
      transition_in(searchinput.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(queryleakstargetdropdown.$$.fragment, local);
      transition_out(searchinput.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(body);
      destroy_component(queryleakstargetdropdown);
      destroy_component(searchinput);
      if (if_block0)
        if_block0.d();
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $LL;
  let $QueryLeaksStore;
  component_subscribe($$self, LL, ($$value) => $$invalidate(3, $LL = $$value));
  component_subscribe($$self, QueryLeaksStore, ($$value) => $$invalidate(4, $QueryLeaksStore = $$value));
  let value = "";
  let affected = [];
  let isEditing = true;
  let target;
  function searchAffected() {
    const affectedEmails = [...affected];
    const trimValue = value.trim();
    if (trimValue.length > 0) {
      affectedEmails.push(trimValue);
    }
    $$invalidate(2, isEditing = false);
    QueryLeaksStore.affected(affectedEmails, target);
  }
  function removeFromAffectedQuery(email) {
    $$invalidate(1, affected = [...affected.filter((v) => v !== email)]);
  }
  function setLeaksTargetFilter(tt) {
    target = tt;
  }
  function searchinput_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value), $$invalidate(1, affected);
  }
  const func = (email) => removeFromAffectedQuery(email);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value, affected*/
    3) {
      {
        const trimmed = value.replaceAll(/\\s+|,*/g, "");
        if (trimmed.length > 1 && value.endsWith(",")) {
          affected.push(trimmed);
          $$invalidate(0, value = "");
        } else if (value.length === 0) {
          $$invalidate(2, isEditing = false);
        } else {
          $$invalidate(2, isEditing = true);
        }
      }
    }
  };
  return [
    value,
    affected,
    isEditing,
    $LL,
    $QueryLeaksStore,
    searchAffected,
    removeFromAffectedQuery,
    setLeaksTargetFilter,
    searchinput_value_binding,
    func
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
