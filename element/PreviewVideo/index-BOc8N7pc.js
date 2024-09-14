import { defineComponent as d, ref as u, openBlock as _, createBlock as l, unref as b, withCtx as I, createCommentVNode as h } from "vue";
/* empty css               */
import { ElDialog as g } from "element-plus";
import { _ as V } from "../VideoPlayer/index-CPiO0EA9.js";
function c(n, o) {
  const e = s();
  return c = function(x, a) {
    return x = x - 367, e[x];
  }, c(n, o);
}
const i = c;
(function(n, o) {
  const e = c, x = n();
  for (; ; )
    try {
      if (parseInt(e(378)) / 1 + parseInt(e(379)) / 2 * (parseInt(e(375)) / 3) + parseInt(e(384)) / 4 * (-parseInt(e(371)) / 5) + -parseInt(e(373)) / 6 + parseInt(e(386)) / 7 * (-parseInt(e(385)) / 8) + parseInt(e(369)) / 9 * (parseInt(e(368)) / 10) + -parseInt(e(377)) / 11 * (-parseInt(e(388)) / 12) === o) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(s, 951916);
function s() {
  const n = ["4710132JVdrJT", "rgba(0, 0, 0, 0.87)", "138561fRVvhL", "视频预览", "25795SsOCVq", "548549oUyWOI", "32wmwwTc", "PreviewVideo", "index", "value", "toString", "86576JHOBKg", "6584cBCuKS", "15323mcxJxv", "now", "15684xqBJAu", "config", "10474130oktTSg", "9yaZMFQ", "modelValue", "430IccTiP", "800"];
  return s = function() {
    return n;
  }, s();
}
const B = d({ name: i(380), __name: i(381), setup(n, { expose: o }) {
  const e = i, x = u(!1), a = u({ id: Date[e(387)]()[e(383)](), lang: "zh", volume: 1, autoplay: !0, screenShot: !0, playbackRate: [0.5, 0.75, 1, 1.5, 2], fluid: !0 });
  return o({ setVisible: (f, r) => {
    const t = e;
    x[t(382)] = f, a.value = Object.assign(a[t(382)], r || {});
  } }), (f, r) => {
    const t = e;
    return _(), l(b(g), { modelValue: x[t(382)], "onUpdate:modelValue": r[0] || (r[0] = (m) => x[t(382)] = m), title: t(376), width: t(372) }, { default: I(() => [x[t(382)] ? (_(), l(V, { key: 0, config: a[t(382)], style: { "background-color": t(374) } }, null, 8, [t(367)])) : h("", !0)]), _: 1 }, 8, [t(370)]);
  };
} });
export {
  B as _
};
