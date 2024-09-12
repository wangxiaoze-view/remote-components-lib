import { defineComponent as _, ref as d, watch as p, onMounted as u, openBlock as l, createElementBlock as m } from "vue";
import I from "xgplayer";
/* empty css                   */
const o = t;
function t(n, a) {
  const e = f();
  return t = function(x, r) {
    return x = x - 492, e[x];
  }, t(n, a);
}
(function(n, a) {
  const e = t, x = n();
  for (; ; )
    try {
      if (-parseInt(e(498)) / 1 + parseInt(e(492)) / 2 + -parseInt(e(504)) / 3 + -parseInt(e(496)) / 4 * (-parseInt(e(499)) / 5) + -parseInt(e(497)) / 6 * (parseInt(e(503)) / 7) + parseInt(e(501)) / 8 + parseInt(e(505)) / 9 * (parseInt(e(494)) / 10) === a) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(f, 597129);
const b = ["id"];
function f() {
  const n = ["3082302nBXjvt", "8886573HsjXmb", "index", "url", "video-player", "2096388RUYzOG", "value", "20BgpOHk", "player", "918780zEWooL", "91722xYQZOF", "1124511OzzBTh", "5WybTnv", "div", "496080biWJjz", "VideoPlayer", "259lSdvYs"];
  return f = function() {
    return n;
  }, f();
}
const B = _({ name: o(502), __name: o(506), props: { config: { default: { id: o(508), url: "" } } }, emits: [o(495)], setup(n, { emit: a }) {
  const { config: e } = n, x = a, r = d(null), s = () => {
    const c = t;
    e[c(507)] && e[c(507)] !== "" && (r.value = new I(e), x(c(495), r[c(493)]));
  };
  return p(e, () => {
    s();
  }, { deep: !0 }), u(s), (c, h) => {
    const i = t;
    return l(), m(i(500), { id: e.id }, null, 8, b);
  };
} });
export {
  B as _
};
