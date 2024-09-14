import { defineComponent as p, openBlock as d, createBlock as _, unref as u, mergeProps as h, createSlots as m, withCtx as s, renderSlot as i } from "vue";
import { NavBar as g } from "vant";
/* empty css               */
const b = o;
(function(a, r) {
  const e = o, n = a();
  for (; ; )
    try {
      if (parseInt(e(442)) / 1 + -parseInt(e(438)) / 2 + -parseInt(e(444)) / 3 + parseInt(e(434)) / 4 * (parseInt(e(440)) / 5) + -parseInt(e(441)) / 6 + -parseInt(e(446)) / 7 * (parseInt(e(445)) / 8) + parseInt(e(433)) / 9 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(c, 758664);
function c() {
  const a = ["11584744RRZrNS", "7FqKOpC", "left", "click-left", "_remote-nav-bar", "$slots", "paddingTop", "41160069CWndcn", "76BFkFfu", "bgColor", "index", "0px", "1646816HhRHKc", "click-right", "91820hJQAFs", "8831970Ouddoc", "662735uawnYW", "right", "3248496rzbQYr"];
  return c = function() {
    return a;
  }, c();
}
function o(a, r) {
  const e = c();
  return o = function(n, f) {
    return n = n - 431, e[n];
  }, o(a, r);
}
const C = p({ name: "VantNavBar", __name: b(436), props: { title: {}, fixed: { type: Boolean }, zIndex: {}, border: { type: Boolean }, leftText: {}, rightText: {}, leftDisabled: { type: Boolean }, rightDisabled: { type: Boolean }, leftArrow: { type: Boolean }, placeholder: { type: Boolean }, safeAreaInsetTop: { type: Boolean }, clickable: { type: Boolean }, bgColor: { default: "#fff" }, paddingTop: { default: b(437) } }, emits: ["click-left", "click-right"], setup(a, { emit: r }) {
  const e = a, n = r, f = () => {
    n(o(448));
  }, l = () => {
    n(o(439));
  };
  return (x, k) => {
    const t = o;
    return d(), _(u(g), h(e, { class: t(449), style: { backgroundColor: e[t(435)], paddingTop: e[t(432)] }, onClickRight: l, onClickLeft: f }), m({ _: 2 }, [x[t(431)][t(447)] ? { name: t(447), fn: s(() => [i(x[t(431)], t(447))]), key: "0" } : void 0, x[t(431)].right ? { name: t(443), fn: s(() => [i(x[t(431)], t(443))]), key: "1" } : void 0]), 1040, ["style"]);
  };
} });
export {
  C as _
};
