import { defineComponent as p, ref as _, unref as l, openBlock as m, createBlock as I, createCommentVNode as d } from "vue";
import { u as b } from "../AmountText/index-Dxz6zNJf.js";
import { ElImageViewer as v } from "element-plus";
/* empty css               */
const f = r;
(function(n, a) {
  const e = r, x = n();
  for (; ; )
    try {
      if (-parseInt(e(484)) / 1 + parseInt(e(494)) / 2 * (-parseInt(e(497)) / 3) + -parseInt(e(491)) / 4 * (parseInt(e(482)) / 5) + -parseInt(e(495)) / 6 * (-parseInt(e(493)) / 7) + parseInt(e(485)) / 8 + parseInt(e(496)) / 9 * (parseInt(e(486)) / 10) + -parseInt(e(492)) / 11 === a) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(o, 468704);
function r(n, a) {
  const e = o();
  return r = function(x, i) {
    return x = x - 481, e[x];
  }, r(n, a);
}
function o() {
  const n = ["value", "index", "url-list", "PreviewImage", "463172jDZUsT", "14550085PEtxgJ", "1156029tRflVx", "1170avrMso", "24LOvcHr", "18ZvDNxc", "591NiCDJy", "initial-index", "5lXZwIX", "urlList", "306687EfulqB", "6643760tkaYqm", "4190530ZMLjRc"];
  return o = function() {
    return n;
  }, o();
}
const Z = p({ name: f(490), __name: f(488), setup(n, { expose: a }) {
  const e = _([]), x = _(0), { loading: i, setLoading: c } = b(!1);
  return a({ reviewImages: (u, s) => {
    const t = r;
    c(u), e.value = s[t(483)] || [], x.value = s.initIndex ?? 0;
  } }), (u, s) => {
    const t = r;
    return l(i) ? (m(), I(l(v), { key: 0, "hide-on-click-modal": !0, "initial-index": x[t(487)], "url-list": e[t(487)], onClose: s[0] || (s[0] = (h) => l(c)(!1)) }, null, 8, [t(481), t(489)])) : d("", !0);
  };
} });
export {
  Z as _
};
