import { openBlock as c, createElementBlock as d, normalizeClass as r, unref as u, createElementVNode as f, renderSlot as m } from "vue";
const p = Array.isArray, b = (e) => typeof e == "string", y = (e) => e !== null && typeof e == "object";
function a(...e) {
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const t = e[o];
    if (t) {
      if (b(t))
        n.push(t);
      else if (p(t))
        for (let s = 0; s < t.length; s++) {
          const l = a(t[s]);
          l && n.push(l);
        }
      else if (y(t))
        for (const s in t)
          t[s] && n.push(s);
    }
  }
  return n.join(" ");
}
const g = ["disabled"], h = { class: "demo-button-inner" }, i = /* @__PURE__ */ Object.assign({
  name: "DemoButton"
}, {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "md"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = e, o = a([
      "demo-button",
      `demo-button-type-${n.type}`,
      `demo-button-size-${n.size}`,
      n.disabled ? "demo-button-disabled" : ""
    ]);
    return (t, s) => (c(), d("button", {
      class: r([u(o)]),
      disabled: e.disabled || e.loading
    }, [
      f("span", h, [
        m(t.$slots, "default")
      ])
    ], 10, g));
  }
});
i.install = (e) => (e.component(i.name, i), e);
const B = [i], S = (e) => {
  B.forEach((n) => {
    e.use(n);
  });
}, j = {
  install: S
};
export {
  i as Button,
  j as default
};
