import { defineComponent as l, ref as _, unref as c, openBlock as p, createBlock as m, createCommentVNode as I } from "vue";
import { u as d } from "../AmountText/index-BoAfgBoa.js";
import { ElImageViewer as b } from "element-plus";
/* empty css               */
const g = f;
(function(t, a) {
  const e = f, x = t();
  for (; ; )
    try {
      if (parseInt(e(246)) / 1 + parseInt(e(244)) / 2 * (-parseInt(e(241)) / 3) + parseInt(e(250)) / 4 * (parseInt(e(242)) / 5) + -parseInt(e(248)) / 6 + -parseInt(e(249)) / 7 + parseInt(e(240)) / 8 * (parseInt(e(253)) / 9) + parseInt(e(252)) / 10 === a) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(o, 374373);
function f(t, a) {
  const e = o();
  return f = function(x, i) {
    return x = x - 238, e[x];
  }, f(t, a);
}
function o() {
  const t = ["3539368mbkWxl", "21ZouYCz", "5wnmYUq", "value", "213122xDKgzL", "initial-index", "480011TfMhsm", "initIndex", "3476268EbDmqv", "396858ApADix", "2176436gqYEGG", "url-list", "2898310uUYliL", "9IkvlYu", "PreviewImage", "urlList"];
  return o = function() {
    return t;
  }, o();
}
const C = l({ name: g(238), __name: "index", setup(t, { expose: a }) {
  const e = _([]), x = _(0), { loading: i, setLoading: s } = d(!1);
  return a({ reviewImages: (u, r) => {
    const n = f;
    s(u), e[n(243)] = r[n(239)] || [], x[n(243)] = r[n(247)] ?? 0;
  } }), (u, r) => {
    const n = f;
    return c(i) ? (p(), m(c(b), { key: 0, "hide-on-click-modal": !0, "initial-index": x.value, "url-list": e[n(243)], onClose: r[0] || (r[0] = (k) => c(s)(!1)) }, null, 8, [n(245), n(251)])) : I("", !0);
  };
} });
export {
  C as _
};
