import { defineComponent as _, ref as u, watch as p, onMounted as f, openBlock as l, createElementBlock as m } from "vue";
import h from "xgplayer";
/* empty css                   */
const s = t;
(function(x, c) {
  const e = t, n = x();
  for (; ; )
    try {
      if (-parseInt(e(454)) / 1 * (-parseInt(e(456)) / 2) + parseInt(e(457)) / 3 + parseInt(e(465)) / 4 * (-parseInt(e(458)) / 5) + parseInt(e(469)) / 6 + parseInt(e(463)) / 7 + parseInt(e(461)) / 8 * (parseInt(e(455)) / 9) + -parseInt(e(466)) / 10 === c) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(d, 968588);
const I = ["id"];
function t(x, c) {
  const e = d();
  return t = function(n, r) {
    return n = n - 454, e[n];
  }, t(x, c);
}
function d() {
  const x = ["div", "1395009Toydab", "player", "10716buhvfn", "25068900WOGlhD", "url", "index", "9557832CMWMif", "11pzUdel", "6363rEeSJj", "954TOLVVA", "1980429SUZdYk", "300NyukPy", "value", "video-player", "13336gZuoNT"];
  return d = function() {
    return x;
  }, d();
}
const g = _({ name: "VideoPlayer", __name: s(468), props: { config: { default: { id: s(460), url: "" } } }, emits: [s(464)], setup(x, { emit: c }) {
  const { config: e } = x, n = c, r = u(null), a = () => {
    const o = t;
    e.url && e[o(467)] !== "" && (r[o(459)] = new h(e), n(o(464), r.value));
  };
  return p(e, () => {
    a();
  }, { deep: !0 }), f(a), (o, b) => {
    const i = t;
    return l(), m(i(462), { id: e.id }, null, 8, I);
  };
} });
export {
  g as _
};
