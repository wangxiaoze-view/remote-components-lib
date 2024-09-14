import { defineComponent as p, ref as _, watch as u, onMounted as l, openBlock as d, createElementBlock as I } from "vue";
import b from "xgplayer";
/* empty css                   */
const s = t;
(function(n, r) {
  const e = t, x = n();
  for (; ; )
    try {
      if (parseInt(e(483)) / 1 + -parseInt(e(486)) / 2 * (parseInt(e(496)) / 3) + -parseInt(e(493)) / 4 * (parseInt(e(499)) / 5) + parseInt(e(485)) / 6 * (parseInt(e(489)) / 7) + parseInt(e(494)) / 8 + -parseInt(e(492)) / 9 * (parseInt(e(487)) / 10) + parseInt(e(482)) / 11 * (parseInt(e(484)) / 12) === r) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(a, 213099);
function t(n, r) {
  const e = a();
  return t = function(x, o) {
    return x = x - 482, e[x];
  }, t(n, r);
}
function a() {
  const n = ["7KxZwFC", "url", "player", "9zUQlqJ", "80JXysnQ", "2475472ofNoaV", "value", "698583SfUOkl", "div", "VideoPlayer", "86505IeJgTw", "video-player", "11RkhuMW", "196840bIFYYU", "2505540ygmfHC", "2134542zTXIYg", "2rnwyAv", "2788460lKFHQx", "index"];
  return a = function() {
    return n;
  }, a();
}
const m = ["id"], k = p({ name: s(498), __name: s(488), props: { config: { default: { id: s(500), url: "" } } }, emits: [s(491)], setup(n, { emit: r }) {
  const { config: e } = n, x = r, o = _(null), f = () => {
    const c = t;
    e.url && e[c(490)] !== "" && (o[c(495)] = new b(e), x("player", o[c(495)]));
  };
  return u(e, () => {
    f();
  }, { deep: !0 }), l(f), (c, h) => {
    const i = t;
    return d(), I(i(497), { id: e.id }, null, 8, m);
  };
} });
export {
  k as _
};
