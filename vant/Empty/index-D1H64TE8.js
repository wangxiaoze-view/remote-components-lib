import { defineComponent as b, openBlock as f, createBlock as p, unref as d, normalizeProps as m, guardReactiveProps as u, createSlots as l, withCtx as a, renderSlot as i } from "vue";
import { Empty as _ } from "vant";
/* empty css               */
const c = o;
function o(x, r) {
  const e = s();
  return o = function(n, t) {
    return n = n - 434, e[n];
  }, o(x, r);
}
(function(x, r) {
  const e = o, n = x();
  for (; ; )
    try {
      if (parseInt(e(442)) / 1 + -parseInt(e(437)) / 2 + -parseInt(e(439)) / 3 + parseInt(e(441)) / 4 + parseInt(e(448)) / 5 * (-parseInt(e(435)) / 6) + parseInt(e(434)) / 7 + parseInt(e(438)) / 8 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(s, 432913);
function s() {
  const x = ["index", "default", "40205rwDXvJ", "21217HDUnOU", "12DPsdtK", "description", "1632548DvWxHU", "7851344illvZX", "440397ZUbbAc", "$slots", "142752kbTdSA", "391931eSYSHv", "error", "image", "ReVantEmpty"];
  return s = function() {
    return x;
  }, s();
}
const y = b({ name: c(445), __name: c(446), props: { image: { default: c(443) }, imageSize: {}, description: {} }, setup(x) {
  const r = x;
  return (e, n) => {
    const t = o;
    return f(), p(d(_), m(u(r)), l({ _: 2 }, [e[t(440)][t(447)] ? { name: "default", fn: a(() => [i(e[t(440)], t(447))]), key: "0" } : void 0, e[t(440)].image ? { name: t(444), fn: a(() => [i(e.$slots, t(444))]), key: "1" } : void 0, e.$slots[t(436)] ? { name: t(436), fn: a(() => [i(e[t(440)], "description")]), key: "2" } : void 0]), 1040);
  };
} });
export {
  y as _
};
