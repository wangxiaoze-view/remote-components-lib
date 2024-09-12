import { defineComponent as F, ref as k, computed as K, onMounted as M, openBlock as i, createElementBlock as _, Fragment as v, renderList as Q, createBlock as R, unref as w, withCtx as L, createElementVNode as $, createVNode as y, createCommentVNode as g, renderSlot as q, toDisplayString as P } from "vue";
/* empty css               */
import { ElImage as j, ElIcon as A, ElMessage as H } from "element-plus";
import { Picture as J } from "@element-plus/icons-vue";
import { g as X, i as z, a as G, b as E, c as O } from "../AmountText/index-Dxz6zNJf.js";
import { _ as U } from "../PreviewImage/index-Da5ZqS8P.js";
import { _ as W } from "../PreviewVideo/index-Bp5bWIEX.js";
const c = h;
(function(l, s) {
  const r = h, n = l();
  for (; ; )
    try {
      if (-parseInt(r(256)) / 1 + -parseInt(r(272)) / 2 * (-parseInt(r(265)) / 3) + parseInt(r(284)) / 4 + parseInt(r(270)) / 5 * (-parseInt(r(281)) / 6) + parseInt(r(255)) / 7 * (parseInt(r(268)) / 8) + -parseInt(r(263)) / 9 + parseInt(r(259)) / 10 === s) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(b, 161665);
const Y = { class: "_remote-lazy" }, Z = [c(275)], ee = { class: c(264) }, xe = { key: 0, class: c(277) }, te = { key: 1, class: "_remote-lazy--exceed-number" };
function h(l, s) {
  const r = b();
  return h = function(n, p) {
    return n = n - 251, r[n];
  }, h(l, s);
}
function b() {
  const l = ["exceedType", "100%", "onClick", "url", "_remote-lazy--exceed-default", "目前只支持图片和视频预览", "number", "src", "95322AyqIFp", "default", "setVisible", "957704QQsoug", "$slots", "filter", "previewVideoRef", "previewImageRef", "_remote-lazy--image", "8743mEkyjw", "107991cdgmlz", "60px", "cover", "1188080dXmtKQ", " + ", "length", "value", "775413nKJMyC", "_remote-lazy--image-slot", "60cBPSPe", "RemoteLazyImage", "div", "80IqpBSD", "map", "65tnDEKN", "99+", "19162msFEIV"];
  return b = function() {
    return l;
  }, b();
}
const le = F({ name: c(266), __name: "index", props: { image: {}, isLazy: { type: Boolean, default: !1 }, style: { default: { width: c(257), height: c(257) } }, limit: { default: 9 }, exceedType: { default: c(282) }, isPreview: { type: Boolean, default: !0 } }, setup(l) {
  const s = c, { image: r, style: n, isLazy: p, exceedType: I, limit: d, isPreview: N } = l, V = k(null), B = k(null), m = k(X(r)[s(269)]((t) => ({ url: t, cover: t }))), S = () => {
    const t = s;
    N && m[t(262)].forEach((a) => {
      const e = t;
      z(a[e(276)]) && (a.cover = p ? G(a[e(276)]) : a[e(276)]), E(a[e(276)]) && O(a[e(276)]).then((f) => {
        const o = e;
        a[o(258)] = f;
      });
    });
  }, C = K(() => {
    const t = s, a = m[t(262)][t(261)] - d;
    return a > 99 ? t(271) : a;
  }), T = (t, a) => {
    var f, o;
    const e = s;
    if (z(t[e(276)])) {
      let x = a;
      m[e(262)][e(251)]((u) => E(u[e(276)])) && x--, (f = V[e(262)]) == null || f.reviewImages(!0, { urlList: m[e(262)][e(251)]((u) => z(u[e(276)]))[e(269)]((u) => u[e(276)]), initIndex: x });
    } else E(t.url) ? (o = B[e(262)]) == null || o[e(283)](!0, { url: t[e(276)] }) : H.error(e(278));
  };
  return M(S), (t, a) => {
    const e = s;
    return i(), _(e(267), Y, [(i(!0), _(v, null, Q(m[e(262)], (f, o) => {
      const x = e;
      return i(), _("div", { key: o, class: x(254), style: n, onClick: (D) => T(f, o) }, [o <= d ? (i(), R(w(j), { key: 0, fit: x(258), src: f[x(258)], style: { width: x(274), height: x(274) } }, { error: L(() => [$(x(267), ee, [y(w(A), null, { default: L(() => [y(w(J))]), _: 1 })])]), _: 2 }, 1032, [x(280)])) : g("", !0), d !== 0 && o == d && r.length !== d ? (i(), _(v, { key: 1 }, [t[x(285)][x(273)] ? q(t[x(285)], x(273), { key: 0 }) : (i(), _(v, { key: 1 }, [I === x(282) ? (i(), _(x(267), xe, x(260) + P(C[x(262)]), 1)) : g("", !0), I === x(279) ? (i(), _(x(267), te, P(C[x(262)]), 1)) : g("", !0)], 64))], 64)) : g("", !0)], 8, Z);
    }), 128)), y(U, { ref_key: e(253), ref: V }, null, 512), y(W, { ref_key: e(252), ref: B }, null, 512)]);
  };
} });
export {
  le as _
};
