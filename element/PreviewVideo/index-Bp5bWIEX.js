import { defineComponent as m, ref as d, openBlock as l, createBlock as u, unref as b, withCtx as h, createCommentVNode as I } from "vue";
/* empty css               */
import { ElDialog as g } from "element-plus";
import { _ as k } from "../VideoPlayer/index-BaBh82H4.js";
function r(n, c) {
  const e = s();
  return r = function(x, a) {
    return x = x - 331, e[x];
  }, r(n, c);
}
const f = r;
(function(n, c) {
  const e = r, x = n();
  for (; ; )
    try {
      if (-parseInt(e(337)) / 1 * (-parseInt(e(331)) / 2) + parseInt(e(334)) / 3 * (parseInt(e(348)) / 4) + parseInt(e(344)) / 5 * (-parseInt(e(339)) / 6) + parseInt(e(335)) / 7 + parseInt(e(351)) / 8 * (parseInt(e(336)) / 9) + -parseInt(e(333)) / 10 + parseInt(e(343)) / 11 * (-parseInt(e(332)) / 12) === c) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(s, 262642);
function s() {
  const n = ["2034670lTOEnu", "17553UTVlhi", "407666nSzWnw", "9mzXOPA", "358991fVaqvX", "assign", "4686ZfvdFR", "PreviewVideo", "800", "now", "11OcCdOY", "1570HcAfbC", "视频预览", "index", "toString", "136JSUccg", "value", "config", "3431312vhUKCe", "2mkGypF", "4004808TksfuR"];
  return s = function() {
    return n;
  }, s();
}
const C = m({ name: f(340), __name: f(346), setup(n, { expose: c }) {
  const e = f, x = d(!1), a = d({ id: Date[e(342)]()[e(347)](), lang: "zh", volume: 1, autoplay: !0, screenShot: !0, playbackRate: [0.5, 0.75, 1, 1.5, 2], fluid: !0 });
  return c({ setVisible: (i, o) => {
    const t = e;
    x[t(349)] = i, a[t(349)] = Object[t(338)](a[t(349)], o || {});
  } }), (i, o) => {
    const t = e;
    return l(), u(b(g), { modelValue: x[t(349)], "onUpdate:modelValue": o[0] || (o[0] = (p) => x.value = p), title: t(345), width: t(341) }, { default: h(() => [x[t(349)] ? (l(), u(k, { key: 0, config: a[t(349)], style: { "background-color": "rgba(0, 0, 0, 0.87)" } }, null, 8, [t(350)])) : I("", !0)]), _: 1 }, 8, ["modelValue"]);
  };
} });
export {
  C as _
};
