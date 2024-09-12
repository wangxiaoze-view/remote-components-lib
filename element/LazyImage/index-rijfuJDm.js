import { defineComponent as D, ref as v, computed as F, onMounted as G, openBlock as n, createElementBlock as f, Fragment as I, renderList as S, createBlock as $, unref as k, withCtx as B, createElementVNode as q, createVNode as h, createCommentVNode as b, renderSlot as H, toDisplayString as L } from "vue";
/* empty css               */
import { ElImage as J, ElIcon as M, ElMessage as Z } from "element-plus";
import { Picture as K } from "@element-plus/icons-vue";
import { g as O, i as w, a as U, b as z, c as j } from "../AmountText/index-Bcfo4TVj.js";
import { _ as A } from "../PreviewImage/index-D0gcukxS.js";
import { _ as Q } from "../PreviewVideo/index-hQWPHHK-.js";
const d = s;
(function(i, _) {
  const r = s, o = i();
  for (; ; )
    try {
      if (-parseInt(r(492)) / 1 * (-parseInt(r(505)) / 2) + parseInt(r(498)) / 3 + -parseInt(r(487)) / 4 + -parseInt(r(501)) / 5 + -parseInt(r(482)) / 6 * (parseInt(r(491)) / 7) + parseInt(r(486)) / 8 + parseInt(r(493)) / 9 === _) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(g, 547564);
const W = { class: "_remote-lazy" }, X = [d(496)], Y = { class: d(500) }, ee = { key: 0, class: "_remote-lazy--exceed-default" }, te = { key: 1, class: d(478) };
function g() {
  const i = ["100%", "default", "exceedType", "2457371GhaKqt", "16IJrIFE", "2203452ttypoy", "value", "_remote-lazy--image", "onClick", "60px", "1111968dxRZZD", "previewImageRef", "_remote-lazy--image-slot", "3749055EqDOgy", "error", "length", "map", "134884hUSizh", "cover", "$slots", "filter", " + ", "_remote-lazy--exceed-number", "forEach", "previewVideoRef", "url", "6ghvFyG", "number", "RemoteLazyImage", "div", "8311232NhaGbn", "4340128PofoHJ"];
  return g = function() {
    return i;
  }, g();
}
function s(i, _) {
  const r = g();
  return s = function(o, m) {
    return o = o - 478, r[o];
  }, s(i, _);
}
const le = D({ name: d(484), __name: "index", props: { image: {}, isLazy: { type: Boolean, default: !1 }, style: { default: { width: "60px", height: d(497) } }, limit: { default: 9 }, exceedType: { default: d(489) }, isPreview: { type: Boolean, default: !0 } }, setup(i) {
  const { image: _, style: r, isLazy: o, exceedType: m, limit: u, isPreview: N } = i, E = v(null), V = v(null), p = v(O(_).map((x) => ({ url: x, cover: x }))), P = () => {
    const x = s;
    N && p.value[x(479)]((a) => {
      const e = x;
      w(a.url) && (a.cover = o ? U(a.url) : a[e(481)]), z(a[e(481)]) && j(a[e(481)]).then((l) => {
        a.cover = l;
      });
    });
  }, C = F(() => {
    const x = s, a = p[x(494)][x(503)] - u;
    return a > 99 ? "99+" : a;
  }), R = (x, a) => {
    var l, c;
    const e = s;
    if (w(x[e(481)])) {
      let t = a;
      p[e(494)][e(508)]((y) => z(y[e(481)])) && t--, (l = E[e(494)]) == null || l.reviewImages(!0, { urlList: p[e(494)][e(508)]((y) => w(y[e(481)]))[e(504)]((y) => y.url), initIndex: t });
    } else z(x[e(481)]) ? (c = V[e(494)]) == null || c.setVisible(!0, { url: x[e(481)] }) : Z[e(502)]("目前只支持图片和视频预览");
  };
  return G(P), (x, a) => {
    const e = s;
    return n(), f("div", W, [(n(!0), f(I, null, S(p[e(494)], (l, c) => {
      const t = e;
      return n(), f("div", { key: c, class: t(495), style: r, onClick: (T) => R(l, c) }, [c <= u ? (n(), $(k(J), { key: 0, fit: "cover", src: l[t(506)], style: { width: "100%", height: t(488) } }, { error: B(() => [q("div", Y, [h(k(M), null, { default: B(() => [h(k(K))]), _: 1 })])]), _: 2 }, 1032, ["src"])) : b("", !0), u !== 0 && c == u && _[t(503)] !== u ? (n(), f(I, { key: 1 }, [x[t(507)][t(490)] ? H(x[t(507)], t(490), { key: 0 }) : (n(), f(I, { key: 1 }, [m === "default" ? (n(), f(t(485), ee, t(509) + L(C.value), 1)) : b("", !0), m === t(483) ? (n(), f(t(485), te, L(C[t(494)]), 1)) : b("", !0)], 64))], 64)) : b("", !0)], 8, X);
    }), 128)), h(A, { ref_key: e(499), ref: E }, null, 512), h(Q, { ref_key: e(480), ref: V }, null, 512)]);
  };
} });
export {
  le as _
};
