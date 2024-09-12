import { defineComponent as d, openBlock as b, createBlock as _, unref as u, mergeProps as h, createSlots as m, withCtx as p, renderSlot as f } from "vue";
import { NavBar as g } from "vant";
/* empty css               */
const x = a;
function a(o, r) {
  const e = s();
  return a = function(t, l) {
    return t = t - 395, e[t];
  }, a(o, r);
}
(function(o, r) {
  const e = a, t = o();
  for (; ; )
    try {
      if (parseInt(e(410)) / 1 * (-parseInt(e(409)) / 2) + parseInt(e(402)) / 3 * (-parseInt(e(413)) / 4) + -parseInt(e(397)) / 5 + parseInt(e(398)) / 6 + -parseInt(e(406)) / 7 + -parseInt(e(411)) / 8 + parseInt(e(404)) / 9 === r) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(s, 464212);
function s() {
  const o = ["bgColor", "click-right", "VantNavBar", "985265cBwKHZ", "1961814QtGImh", "right", "click-left", "paddingTop", "3cADLaq", "$slots", "10372302XCpuir", "index", "1841728PBZBSC", "#fff", "left", "204aXCOjw", "2427tGwQYs", "1473608rwiKzI", "0px", "493292CidVCf"];
  return s = function() {
    return o;
  }, s();
}
const C = d({ name: x(396), __name: x(405), props: { title: {}, fixed: { type: Boolean }, zIndex: {}, border: { type: Boolean }, leftText: {}, rightText: {}, leftDisabled: { type: Boolean }, rightDisabled: { type: Boolean }, leftArrow: { type: Boolean }, placeholder: { type: Boolean }, safeAreaInsetTop: { type: Boolean }, clickable: { type: Boolean }, bgColor: { default: x(407) }, paddingTop: { default: x(412) } }, emits: [x(400), x(395)], setup(o, { emit: r }) {
  const e = o, t = r, l = () => {
    t(a(400));
  }, c = () => {
    t("click-right");
  };
  return (i, B) => {
    const n = a;
    return b(), _(u(g), h(e, { class: "_remote-nav-bar", style: { backgroundColor: e[n(414)], paddingTop: e[n(401)] }, onClickRight: c, onClickLeft: l }), m({ _: 2 }, [i[n(403)][n(408)] ? { name: "left", fn: p(() => [f(i[n(403)], n(408))]), key: "0" } : void 0, i.$slots.right ? { name: "right", fn: p(() => [f(i[n(403)], n(399))]), key: "1" } : void 0]), 1040, ["style"]);
  };
} });
export {
  C as _
};
