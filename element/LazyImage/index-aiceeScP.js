import { defineComponent as R, ref as k, computed as T, onMounted as $, openBlock as o, createElementBlock as _, Fragment as v, renderList as H, createBlock as S, unref as V, withCtx as L, createElementVNode as j, createVNode as p, createCommentVNode as y, renderSlot as G, toDisplayString as P } from "vue";
/* empty css               */
import { ElImage as K, ElIcon as O, ElMessage as X } from "element-plus";
import { Picture as Y } from "@element-plus/icons-vue";
import { g as q, i as w, a as A, b as z, c as J } from "../AmountText/index-Cf8SjsXW.js";
import { _ as Q } from "../PreviewImage/index-Cw1PRsOK.js";
import { _ as U } from "../PreviewVideo/index-9e81KUqf.js";
function h() {
  const i = ["exceedType", "53963wlSFat", " + ", "76dPVFYL", "60px", "reviewImages", "filter", "34522leKFVs", "length", "forEach", "_remote-lazy", "map", "19077JHbXgP", "844063CMofGV", "210gVOReW", "目前只支持图片和视频预览", "div", "_remote-lazy--exceed-number", "22285UNmhQN", "url", "cover", "27HjneoP", "setVisible", "RemoteLazyImage", "_remote-lazy--exceed-default", "value", "src", "2178764FpDOiM", "21FnEfXr", "100%", "previewImageRef", "30DsGmvq", "_remote-lazy--image", "$slots", "default", "then", "542032tKlAYs", "number", "804eDjldd", "error"];
  return h = function() {
    return i;
  }, h();
}
function g(i, s) {
  const t = h();
  return g = function(a, f) {
    return a = a - 174, t[a];
  }, g(i, s);
}
const l = g;
(function(i, s) {
  const t = g, a = i();
  for (; ; )
    try {
      if (parseInt(t(186)) / 1 * (-parseInt(t(205)) / 2) + parseInt(t(210)) / 3 * (-parseInt(t(201)) / 4) + -parseInt(t(176)) / 5 * (-parseInt(t(212)) / 6) + parseInt(t(185)) / 7 + parseInt(t(194)) / 8 * (parseInt(t(179)) / 9) + -parseInt(t(189)) / 10 * (parseInt(t(211)) / 11) + parseInt(t(196)) / 12 * (parseInt(t(199)) / 13) === s) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(h, 235125);
const W = { class: l(208) }, Z = ["onClick"], ee = { class: "_remote-lazy--image-slot" }, xe = { key: 0, class: l(182) }, te = { key: 1, class: l(175) }, ie = R({ name: l(181), __name: "index", props: { image: {}, isLazy: { type: Boolean, default: !1 }, style: { default: { width: l(202), height: l(202) } }, limit: { default: 9 }, exceedType: { default: l(192) }, isPreview: { type: Boolean, default: !0 } }, setup(i) {
  const s = l, { image: t, style: a, isLazy: f, exceedType: I, limit: b, isPreview: B } = i, C = k(null), E = k(null), m = k(q(t)[s(209)]((r) => ({ url: r, cover: r }))), N = () => {
    const r = s;
    B && m.value[r(207)]((c) => {
      const e = r;
      w(c.url) && (c[e(178)] = f ? A(c[e(177)]) : c[e(177)]), z(c[e(177)]) && J(c[e(177)])[e(193)]((d) => {
        const n = e;
        c[n(178)] = d;
      });
    });
  }, F = T(() => {
    const r = s, c = m[r(183)][r(206)] - b;
    return c > 99 ? "99+" : c;
  }), D = (r, c) => {
    var d, n;
    const e = s;
    if (w(r[e(177)])) {
      let x = c;
      m[e(183)][e(204)]((u) => z(u.url)) && x--, (d = C.value) == null || d[e(203)](!0, { urlList: m[e(183)][e(204)]((u) => w(u[e(177)])).map((u) => u.url), initIndex: x });
    } else z(r[e(177)]) ? (n = E[e(183)]) == null || n[e(180)](!0, { url: r[e(177)] }) : X[e(197)](e(213));
  };
  return $(N), (r, c) => {
    const e = s;
    return o(), _("div", W, [(o(!0), _(v, null, H(m[e(183)], (d, n) => {
      const x = e;
      return o(), _(x(174), { key: n, class: x(190), style: a, onClick: (M) => D(d, n) }, [n <= b ? (o(), S(V(K), { key: 0, fit: x(178), src: d[x(178)], style: { width: x(187), height: x(187) } }, { error: L(() => [j(x(174), ee, [p(V(O), null, { default: L(() => [p(V(Y))]), _: 1 })])]), _: 2 }, 1032, [x(184)])) : y("", !0), b !== 0 && n == b && t[x(206)] !== b ? (o(), _(v, { key: 1 }, [r[x(191)][x(198)] ? G(r.$slots, x(198), { key: 0 }) : (o(), _(v, { key: 1 }, [I === x(192) ? (o(), _("div", xe, x(200) + P(F[x(183)]), 1)) : y("", !0), I === x(195) ? (o(), _(x(174), te, P(F[x(183)]), 1)) : y("", !0)], 64))], 64)) : y("", !0)], 8, Z);
    }), 128)), p(Q, { ref_key: e(188), ref: C }, null, 512), p(U, { ref_key: "previewVideoRef", ref: E }, null, 512)]);
  };
} });
export {
  ie as _
};
