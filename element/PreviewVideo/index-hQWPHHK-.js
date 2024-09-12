import { defineComponent as m, ref as f, openBlock as u, createBlock as _, unref as b, withCtx as I, createCommentVNode as h } from "vue";
/* empty css               */
import { ElDialog as g } from "element-plus";
import { _ as V } from "../VideoPlayer/index-BXE96fqe.js";
const i = s;
function s(t, o) {
  const e = c();
  return s = function(x, n) {
    return x = x - 162, e[x];
  }, s(t, o);
}
(function(t, o) {
  const e = s, x = t();
  for (; ; )
    try {
      if (parseInt(e(168)) / 1 + parseInt(e(180)) / 2 + -parseInt(e(172)) / 3 * (-parseInt(e(177)) / 4) + -parseInt(e(176)) / 5 * (-parseInt(e(179)) / 6) + parseInt(e(175)) / 7 + -parseInt(e(174)) / 8 + parseInt(e(164)) / 9 * (-parseInt(e(169)) / 10) === o) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(c, 607443);
function c() {
  const t = ["800", "1122974xWIEhg", "12699580OlFnIP", "视频预览", "toString", "2757KuFGwa", "now", "7786728fQLqQH", "5268396IlepYS", "123345lGuiTU", "2000AedAtr", "config", "96VVXbzB", "241872ZxNdDs", "value", "index", "9TKibRA", "rgba(0, 0, 0, 0.87)", "PreviewVideo"];
  return c = function() {
    return t;
  }, c();
}
const A = m({ name: i(166), __name: i(163), setup(t, { expose: o }) {
  const e = i, x = f(!1), n = f({ id: Date[e(173)]()[e(171)](), lang: "zh", volume: 1, autoplay: !0, screenShot: !0, playbackRate: [0.5, 0.75, 1, 1.5, 2], fluid: !0 });
  return o({ setVisible: (l, r) => {
    const a = e;
    x.value = l, n[a(162)] = Object.assign(n[a(162)], r || {});
  } }), (l, r) => {
    const a = e;
    return u(), _(b(g), { modelValue: x.value, "onUpdate:modelValue": r[0] || (r[0] = (p) => x[a(162)] = p), title: a(170), width: a(167) }, { default: I(() => [x[a(162)] ? (u(), _(V, { key: 0, config: n[a(162)], style: { "background-color": a(165) } }, null, 8, [a(178)])) : h("", !0)]), _: 1 }, 8, ["modelValue"]);
  };
} });
export {
  A as _
};
