import { defineComponent as p, openBlock as f, createBlock as d, unref as u, normalizeProps as m, guardReactiveProps as l, createSlots as _, withCtx as a, renderSlot as i } from "vue";
import { Empty as b } from "vant";
/* empty css               */
function o(x, r) {
  const e = s();
  return o = function(n, t) {
    return n = n - 297, e[n];
  }, o(x, r);
}
const c = o;
(function(x, r) {
  const e = o, n = x();
  for (; ; )
    try {
      if (-parseInt(e(299)) / 1 * (parseInt(e(311)) / 2) + parseInt(e(304)) / 3 * (parseInt(e(300)) / 4) + -parseInt(e(309)) / 5 + parseInt(e(297)) / 6 + -parseInt(e(301)) / 7 + parseInt(e(310)) / 8 * (parseInt(e(313)) / 9) + parseInt(e(298)) / 10 * (parseInt(e(305)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(s, 215535);
function s() {
  const x = ["1515804QEvmuw", "10yMASgU", "431TrakvZ", "2188cqoUSB", "2847047yUlRZh", "error", "ReVantEmpty", "141kUwNoh", "7404749NHMeYd", "$slots", "default", "index", "792005eNekkg", "8yIEVeE", "1158kTvodd", "image", "708336IquMvW", "description"];
  return s = function() {
    return x;
  }, s();
}
const v = p({ name: c(303), __name: c(308), props: { image: { default: c(302) }, imageSize: {}, description: {} }, setup(x) {
  const r = x;
  return (e, n) => {
    const t = o;
    return f(), d(u(b), m(l(r)), _({ _: 2 }, [e.$slots[t(307)] ? { name: t(307), fn: a(() => [i(e.$slots, t(307))]), key: "0" } : void 0, e[t(306)][t(312)] ? { name: t(312), fn: a(() => [i(e.$slots, t(312))]), key: "1" } : void 0, e.$slots[t(314)] ? { name: "description", fn: a(() => [i(e[t(306)], "description")]), key: "2" } : void 0]), 1040);
  };
} });
export {
  v as _
};
