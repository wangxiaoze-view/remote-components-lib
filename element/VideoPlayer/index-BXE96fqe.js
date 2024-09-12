import { defineComponent as p, ref as d, watch as u, onMounted as f, openBlock as l, createElementBlock as m } from "vue";
import I from "xgplayer";
/* empty css                   */
function x(t, r) {
  const e = a();
  return x = function(n, o) {
    return n = n - 120, e[n];
  }, x(t, r);
}
const i = x;
(function(t, r) {
  const e = x, n = t();
  for (; ; )
    try {
      if (parseInt(e(122)) / 1 * (-parseInt(e(133)) / 2) + -parseInt(e(132)) / 3 + -parseInt(e(128)) / 4 + -parseInt(e(120)) / 5 + -parseInt(e(129)) / 6 + parseInt(e(121)) / 7 + -parseInt(e(124)) / 8 * (-parseInt(e(126)) / 9) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(a, 680649);
function a() {
  const t = ["366hmitCA", "url", "19711576lLkIav", "div", "18bYqecm", "index", "1568140bQpdZm", "4756878OECDUX", "VideoPlayer", "value", "3874587ygGHgm", "4424eIMemH", "5633490XQAGEG", "1157954RVknDG"];
  return a = function() {
    return t;
  }, a();
}
const h = ["id"], v = p({ name: i(130), __name: i(127), props: { config: { default: { id: "video-player", url: "" } } }, emits: ["player"], setup(t, { emit: r }) {
  const { config: e } = t, n = r, o = d(null), s = () => {
    const c = x;
    e.url && e[c(123)] !== "" && (o[c(131)] = new I(e), n("player", o[c(131)]));
  };
  return u(e, () => {
    s();
  }, { deep: !0 }), f(s), (c, b) => {
    const _ = x;
    return l(), m(_(125), { id: e.id }, null, 8, h);
  };
} });
export {
  v as _
};
