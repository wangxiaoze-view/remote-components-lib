import { defineComponent as b, ref as _, unref as d, openBlock as p, createBlock as f, createCommentVNode as m } from "vue";
import { u as I } from "../AmountText/index-Bcfo4TVj.js";
import { ElImageViewer as h } from "element-plus";
/* empty css               */
const l = r;
(function(n, a) {
  const e = r, x = n();
  for (; ; )
    try {
      if (parseInt(e(120)) / 1 * (parseInt(e(116)) / 2) + parseInt(e(119)) / 3 * (-parseInt(e(128)) / 4) + -parseInt(e(123)) / 5 * (parseInt(e(127)) / 6) + parseInt(e(129)) / 7 + parseInt(e(125)) / 8 + parseInt(e(124)) / 9 * (-parseInt(e(122)) / 10) + parseInt(e(117)) / 11 === a) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(i, 422704);
function r(n, a) {
  const e = i();
  return r = function(x, o) {
    return x = x - 115, e[x];
  }, r(n, a);
}
function i() {
  const n = ["1323cSyqTk", "4722576lmLsct", "PreviewImage", "4098XaMdKF", "8NUdvCw", "805105XmBFSz", "initIndex", "value", "index", "50068XXubrs", "7361497dSLJYb", "urlList", "499311XWosjV", "1eUHccf", "url-list", "18210dyQHld", "2755GYnwxc"];
  return i = function() {
    return n;
  }, i();
}
const y = b({ name: l(126), __name: l(115), setup(n, { expose: a }) {
  const e = _([]), x = _(0), { loading: o, setLoading: c } = I(!1);
  return a({ reviewImages: (u, s) => {
    const t = r;
    c(u), e.value = s[t(118)] || [], x.value = s[t(130)] ?? 0;
  } }), (u, s) => {
    const t = r;
    return d(o) ? (p(), f(d(h), { key: 0, "hide-on-click-modal": !0, "initial-index": x[t(131)], "url-list": e[t(131)], onClose: s[0] || (s[0] = (k) => d(c)(!1)) }, null, 8, ["initial-index", t(121)])) : m("", !0);
  };
} });
export {
  y as _
};
