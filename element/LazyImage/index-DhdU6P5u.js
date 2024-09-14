import { defineComponent as P, ref as v, computed as S, onMounted as $, openBlock as o, createElementBlock as u, Fragment as k, renderList as F, createBlock as G, unref as w, withCtx as T, createElementVNode as K, createVNode as y, createCommentVNode as h, renderSlot as O, toDisplayString as B } from "vue";
/* empty css               */
import { ElImage as W, ElIcon as j, ElMessage as A } from "element-plus";
import { Picture as D } from "@element-plus/icons-vue";
import { g as J, i as z, a as Q, b as V, c as U } from "../AmountText/index-BoAfgBoa.js";
import { _ as Y } from "../PreviewImage/index-C_gxonKB.js";
import { _ as q } from "../PreviewVideo/index-BOc8N7pc.js";
const _ = g;
function g(l, n) {
  const x = b();
  return g = function(s, p) {
    return s = s - 258, x[s];
  }, g(l, n);
}
(function(l, n) {
  const x = g, s = l();
  for (; ; )
    try {
      if (parseInt(x(288)) / 1 + parseInt(x(265)) / 2 + parseInt(x(264)) / 3 * (parseInt(x(268)) / 4) + parseInt(x(291)) / 5 * (parseInt(x(266)) / 6) + -parseInt(x(277)) / 7 * (-parseInt(x(292)) / 8) + -parseInt(x(269)) / 9 + -parseInt(x(271)) / 10 * (parseInt(x(290)) / 11) === n) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(b, 343606);
const X = { class: "_remote-lazy" }, Z = [_(284)], ee = { class: "_remote-lazy--image-slot" }, te = { key: 0, class: "_remote-lazy--exceed-default" }, xe = { key: 1, class: "_remote-lazy--exceed-number" };
function b() {
  const l = ["287382ohSFVb", "index", "4tOASMT", "3843927labzoi", "reviewImages", "1487250wwsTNW", "目前只支持图片和视频预览", "previewImageRef", "value", "filter", "src", "4722662HWvHdK", "99+", "map", "cover", "number", "url", "length", "onClick", "div", "RemoteLazyImage", "previewVideoRef", "318353RsrIxR", "60px", "33cyYJMu", "15PKeNdx", "8ujxukG", "100%", "default", "exceedType", "then", "$slots", "forEach", "149271OUtvwC", "60834GvmHNQ"];
  return b = function() {
    return l;
  }, b();
}
const ce = P({ name: _(286), __name: _(267), props: { image: {}, isLazy: { type: Boolean, default: !1 }, style: { default: { width: _(289), height: _(289) } }, limit: { default: 9 }, exceedType: { default: _(259) }, isPreview: { type: Boolean, default: !0 } }, setup(l) {
  const n = _, { image: x, style: s, isLazy: p, exceedType: I, limit: f, isPreview: L } = l, C = v(null), E = v(null), m = v(J(x)[n(279)]((t) => ({ url: t, cover: t }))), R = () => {
    const t = n;
    L && m[t(274)][t(263)]((a) => {
      const e = t;
      z(a.url) && (a.cover = p ? Q(a[e(282)]) : a[e(282)]), V(a.url) && U(a[e(282)])[e(261)]((i) => {
        a.cover = i;
      });
    });
  }, N = S(() => {
    const t = n, a = m[t(274)][t(283)] - f;
    return a > 99 ? t(278) : a;
  }), H = (t, a) => {
    var i, c;
    const e = n;
    if (z(t[e(282)])) {
      let r = a;
      m.value.filter((d) => V(d[e(282)])) && r--, (i = C[e(274)]) == null || i[e(270)](!0, { urlList: m[e(274)][e(275)]((d) => z(d.url)).map((d) => d[e(282)]), initIndex: r });
    } else V(t.url) ? (c = E[e(274)]) == null || c.setVisible(!0, { url: t.url }) : A.error(e(272));
  };
  return $(R), (t, a) => {
    const e = n;
    return o(), u(e(285), X, [(o(!0), u(k, null, F(m[e(274)], (i, c) => {
      const r = e;
      return o(), u("div", { key: c, class: "_remote-lazy--image", style: s, onClick: (M) => H(i, c) }, [c <= f ? (o(), G(w(W), { key: 0, fit: r(280), src: i.cover, style: { width: r(258), height: "100%" } }, { error: T(() => [K(r(285), ee, [y(w(j), null, { default: T(() => [y(w(D))]), _: 1 })])]), _: 2 }, 1032, [r(276)])) : h("", !0), f !== 0 && c == f && x.length !== f ? (o(), u(k, { key: 1 }, [t[r(262)][r(260)] ? O(t.$slots, r(260), { key: 0 }) : (o(), u(k, { key: 1 }, [I === "default" ? (o(), u(r(285), te, " + " + B(N[r(274)]), 1)) : h("", !0), I === r(281) ? (o(), u(r(285), xe, B(N[r(274)]), 1)) : h("", !0)], 64))], 64)) : h("", !0)], 8, Z);
    }), 128)), y(Y, { ref_key: e(273), ref: C }, null, 512), y(q, { ref_key: e(287), ref: E }, null, 512)]);
  };
} });
export {
  ce as _
};
