import { defineComponent as d, openBlock as _, createBlock as u, unref as m, mergeProps as I, createSlots as g, withCtx as p, renderSlot as i } from "vue";
import { NavBar as h } from "vant";
/* empty css               */
const n = r;
(function(o, a) {
  const e = r, t = o();
  for (; ; )
    try {
      if (parseInt(e(144)) / 1 * (-parseInt(e(153)) / 2) + parseInt(e(139)) / 3 + parseInt(e(131)) / 4 * (-parseInt(e(143)) / 5) + parseInt(e(145)) / 6 + -parseInt(e(138)) / 7 * (parseInt(e(147)) / 8) + -parseInt(e(149)) / 9 + -parseInt(e(132)) / 10 * (-parseInt(e(133)) / 11) === a) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(c, 427476);
function r(o, a) {
  const e = c();
  return r = function(t, l) {
    return t = t - 130, e[t];
  }, r(o, a);
}
const C = d({ name: n(142), __name: n(146), props: { title: {}, fixed: { type: Boolean }, zIndex: {}, border: { type: Boolean }, leftText: {}, rightText: {}, leftDisabled: { type: Boolean }, rightDisabled: { type: Boolean }, leftArrow: { type: Boolean }, placeholder: { type: Boolean }, safeAreaInsetTop: { type: Boolean }, clickable: { type: Boolean }, bgColor: { default: n(140) }, paddingTop: { default: n(135) } }, emits: [n(130), n(148)], setup(o, { emit: a }) {
  const e = o, t = a, l = () => {
    t(r(130));
  }, f = () => {
    t("click-right");
  };
  return (s, k) => {
    const x = r;
    return _(), u(m(h), I(e, { class: x(136), style: { backgroundColor: e[x(137)], paddingTop: e[x(150)] }, onClickRight: f, onClickLeft: l }), g({ _: 2 }, [s.$slots[x(141)] ? { name: x(141), fn: p(() => [i(s.$slots, x(141))]), key: "0" } : void 0, s[x(151)][x(134)] ? { name: x(134), fn: p(() => [i(s.$slots, x(134))]), key: "1" } : void 0]), 1040, [x(152)]);
  };
} });
function c() {
  const o = ["1738580Xuuzqa", "1JUHeXV", "1316880SRsIXR", "index", "1784oEdFUa", "click-right", "6426459mgsPZC", "paddingTop", "$slots", "style", "146012kclGcV", "click-left", "4GOTXJV", "30UEPvVv", "5073211RIkera", "right", "0px", "_remote-nav-bar", "bgColor", "10073dLmIqN", "840189COIjAd", "#fff", "left", "VantNavBar"];
  return c = function() {
    return o;
  }, c();
}
export {
  C as _
};
