import { defineComponent as d, openBlock as _, createBlock as u, unref as m, mergeProps as g, createSlots as h, withCtx as p, renderSlot as i } from "vue";
import { NavBar as y } from "vant";
/* empty css               */
function o(n, r) {
  const e = f();
  return o = function(x, s) {
    return x = x - 249, e[x];
  }, o(n, r);
}
const c = o;
(function(n, r) {
  const e = o, x = n();
  for (; ; )
    try {
      if (-parseInt(e(263)) / 1 * (parseInt(e(271)) / 2) + parseInt(e(270)) / 3 + -parseInt(e(262)) / 4 * (-parseInt(e(253)) / 5) + -parseInt(e(249)) / 6 * (-parseInt(e(252)) / 7) + parseInt(e(268)) / 8 + parseInt(e(266)) / 9 + -parseInt(e(251)) / 10 * (parseInt(e(267)) / 11) === r) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(f, 662733);
function f() {
  const n = ["bgColor", "572816ihbzQP", "15112aQKtKj", "$slots", "click-left", "8635383EQipOk", "6304914SeSNeQ", "7394560pMKsWC", "click-right", "2535057RcyWFT", "28qTLPAv", "2562sgZgiI", "style", "50FLKVqf", "7189cqlRGU", "20NlzCbT", "0px", "index", "_remote-nav-bar", "paddingTop", "left", "VantNavBar", "right"];
  return f = function() {
    return n;
  }, f();
}
const C = d({ name: c(259), __name: c(255), props: { title: {}, fixed: { type: Boolean }, zIndex: {}, border: { type: Boolean }, leftText: {}, rightText: {}, leftDisabled: { type: Boolean }, rightDisabled: { type: Boolean }, leftArrow: { type: Boolean }, placeholder: { type: Boolean }, safeAreaInsetTop: { type: Boolean }, clickable: { type: Boolean }, bgColor: { default: "#fff" }, paddingTop: { default: c(254) } }, emits: [c(265), c(269)], setup(n, { emit: r }) {
  const e = n, x = r, s = () => {
    x(o(265));
  }, l = () => {
    x(o(269));
  };
  return (a, I) => {
    const t = o;
    return _(), u(m(y), g(e, { class: t(256), style: { backgroundColor: e[t(261)], paddingTop: e[t(257)] }, onClickRight: l, onClickLeft: s }), h({ _: 2 }, [a[t(264)][t(258)] ? { name: t(258), fn: p(() => [i(a[t(264)], "left")]), key: "0" } : void 0, a[t(264)][t(260)] ? { name: t(260), fn: p(() => [i(a.$slots, t(260))]), key: "1" } : void 0]), 1040, [t(250)]);
  };
} });
export {
  C as _
};
