import { defineComponent as m, ref as u, openBlock as f, createBlock as _, unref as b, withCtx as h, createCommentVNode as I } from "vue";
/* empty css               */
import { ElDialog as g } from "element-plus";
import { _ as v } from "../VideoPlayer/index-CF9ZUpsW.js";
const i = c;
(function(n, o) {
  const e = c, x = n();
  for (; ; )
    try {
      if (-parseInt(e(363)) / 1 * (parseInt(e(368)) / 2) + parseInt(e(361)) / 3 + -parseInt(e(364)) / 4 + -parseInt(e(362)) / 5 * (parseInt(e(372)) / 6) + -parseInt(e(366)) / 7 + -parseInt(e(356)) / 8 * (parseInt(e(355)) / 9) + parseInt(e(359)) / 10 === o) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(s, 643905);
function c(n, o) {
  const e = s();
  return c = function(x, a) {
    return x = x - 354, e[x];
  }, c(n, o);
}
const D = m({ name: i(354), __name: i(371), setup(n, { expose: o }) {
  const e = i, x = u(!1), a = u({ id: Date[e(360)]()[e(365)](), lang: "zh", volume: 1, autoplay: !0, screenShot: !0, playbackRate: [0.5, 0.75, 1, 1.5, 2], fluid: !0 });
  return o({ setVisible: (l, r) => {
    const t = e;
    x.value = l, a[t(370)] = Object[t(369)](a[t(370)], r || {});
  } }), (l, r) => {
    const t = e;
    return f(), _(b(g), { modelValue: x[t(370)], "onUpdate:modelValue": r[0] || (r[0] = (p) => x.value = p), title: t(357), width: t(367) }, { default: h(() => [x[t(370)] ? (f(), _(v, { key: 0, config: a.value, style: { "background-color": t(358) } }, null, 8, ["config"])) : I("", !0)]), _: 1 }, 8, ["modelValue"]);
  };
} });
function s() {
  const n = ["value", "index", "15852VagZDv", "PreviewVideo", "144flxhcv", "293872zcPaFm", "视频预览", "rgba(0, 0, 0, 0.87)", "23022570aWKTwK", "now", "1301124EkNmuU", "925fSNmwD", "1NLhKXi", "1002576oRmUHh", "toString", "2842084tNxCra", "800", "717780MeLXcD", "assign"];
  return s = function() {
    return n;
  }, s();
}
export {
  D as _
};
