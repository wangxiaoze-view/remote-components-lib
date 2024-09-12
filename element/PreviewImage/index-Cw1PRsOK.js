import { defineComponent as l, ref as _, unref as c, openBlock as p, createBlock as m, createCommentVNode as I } from "vue";
import { u as b } from "../AmountText/index-Cf8SjsXW.js";
import { ElImageViewer as h } from "element-plus";
/* empty css               */
function i() {
  const t = ["value", "initial-index", "initIndex", "9705510qxwXKi", "39914410UaNxSX", "url-list", "317508OyJDqS", "index", "urlList", "PreviewImage", "21ubouKZ", "1844286DEkJns", "13PyvsDu", "16300JnrKoY", "4746860CNQTjP", "4311600dzfPhw", "20WDnnTC"];
  return i = function() {
    return t;
  }, i();
}
const d = r;
(function(t, a) {
  const e = r, x = t();
  for (; ; )
    try {
      if (parseInt(e(504)) / 1 * (-parseInt(e(505)) / 2) + parseInt(e(498)) / 3 * (parseInt(e(508)) / 4) + -parseInt(e(506)) / 5 + parseInt(e(503)) / 6 * (-parseInt(e(502)) / 7) + -parseInt(e(507)) / 8 + -parseInt(e(495)) / 9 + parseInt(e(496)) / 10 === a) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(i, 925816);
function r(t, a) {
  const e = i();
  return r = function(x, o) {
    return x = x - 493, e[x];
  }, r(t, a);
}
const D = l({ name: d(501), __name: d(499), setup(t, { expose: a }) {
  const e = _([]), x = _(0), { loading: o, setLoading: s } = b(!1);
  return a({ reviewImages: (u, f) => {
    const n = r;
    s(u), e.value = f[n(500)] || [], x[n(509)] = f[n(494)] ?? 0;
  } }), (u, f) => {
    const n = r;
    return c(o) ? (p(), m(c(h), { key: 0, "hide-on-click-modal": !0, "initial-index": x.value, "url-list": e[n(509)], onClose: f[0] || (f[0] = (k) => c(s)(!1)) }, null, 8, [n(493), n(497)])) : I("", !0);
  };
} });
export {
  D as _
};
