import { defineComponent as i, openBlock as p, createBlock as f, unref as u, normalizeProps as m, guardReactiveProps as l, createSlots as _, withCtx as a, renderSlot as s } from "vue";
import { Empty as I } from "vant";
/* empty css               */
const c = d;
function o() {
  const x = ["error", "1104397lTLPyJ", "82946QjJwje", "4463808FlDnOi", "17EXOQkV", "image", "6865632PYRfwp", "2688464SCRcli", "$slots", "1449261zpnEJd", "6773895TculSa", "3mVLHvO", "default", "index", "description"];
  return o = function() {
    return x;
  }, o();
}
(function(x, r) {
  const e = d, n = x();
  for (; ; )
    try {
      if (parseInt(e(219)) / 1 * (-parseInt(e(217)) / 2) + -parseInt(e(211)) / 3 * (-parseInt(e(207)) / 4) + parseInt(e(210)) / 5 + -parseInt(e(206)) / 6 + -parseInt(e(216)) / 7 + parseInt(e(218)) / 8 + parseInt(e(209)) / 9 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(o, 738816);
function d(x, r) {
  const e = o();
  return d = function(n, t) {
    return n = n - 206, e[n];
  }, d(x, r);
}
const S = i({ name: "ReVantEmpty", __name: c(213), props: { image: { default: c(215) }, imageSize: {}, description: {} }, setup(x) {
  const r = x;
  return (e, n) => {
    const t = d;
    return p(), f(u(I), m(l(r)), _({ _: 2 }, [e[t(208)].default ? { name: "default", fn: a(() => [s(e.$slots, t(212))]), key: "0" } : void 0, e[t(208)][t(220)] ? { name: t(220), fn: a(() => [s(e[t(208)], t(220))]), key: "1" } : void 0, e[t(208)][t(214)] ? { name: t(214), fn: a(() => [s(e[t(208)], t(214))]), key: "2" } : void 0]), 1040);
  };
} });
export {
  S as _
};
