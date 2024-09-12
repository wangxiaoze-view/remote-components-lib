import { defineComponent as xe, ref as v, reactive as ae, computed as T, watch as X, resolveComponent as S, openBlock as C, createElementBlock as I, createVNode as K, withCtx as q, createElementVNode as m, normalizeStyle as A, Fragment as F, renderList as H, toDisplayString as w, withKeys as L, normalizeClass as te, nextTick as M } from "vue";
import { cloneDeep as U } from "lodash-es";
function E() {
  const p = ["span", "index", "PulldownSelect", "vab-icon", "vxe-pulldown", "join", "searchValue", "from", "el-input", "27mRNHUr", "modelValue", "tag-label", "push", "4173310hVpmCV", "2369613UsLkyR", "search-list-container", "delete", "1029880KUuvXp", "placeholder", "84010EBhXGa", "search-icon", "value", "searchList", "tag-container", "emit-search", "length", "#dcdfe6", "enter", "searchLabel", "splice", "style", "searchKey", "1038528tfqIgO", "keyupSelect", "_remote-search-select-container", "forEach", "search-tag", "inputEl", "findIndex", "onClick", "keyCode", "334000OGsyjL", "div", "tag-title", "preventDefault", "126378epWeeg", "hover-li", "down", "map", "77dgIfoB", "4OixnBc"];
  return E = function() {
    return p;
  }, E();
}
const i = l;
(function(p, y) {
  const s = l, c = p();
  for (; ; )
    try {
      if (parseInt(s(426)) / 1 + -parseInt(s(450)) / 2 + -parseInt(s(423)) / 3 * (parseInt(s(459)) / 4) + parseInt(s(422)) / 5 + -parseInt(s(454)) / 6 * (parseInt(s(458)) / 7) + -parseInt(s(441)) / 8 + parseInt(s(469)) / 9 * (-parseInt(s(428)) / 10) === y) break;
      c.push(c.shift());
    } catch {
      c.push(c.shift());
    }
})(E, 520959);
function l(p, y) {
  const s = E();
  return l = function(c, _) {
    return c = c - 419, s[c];
  }, l(p, y);
}
const ce = { class: i(443) }, ne = { class: i(429) }, se = { class: i(445) }, re = { class: i(420) }, oe = { class: i(452) }, le = [i(448)], ie = { class: i(424) }, _e = ["onClick"], be = xe({ name: i(462), __name: i(461), props: { searchList: {} }, emits: [i(433)], setup(p, { expose: y, emit: s }) {
  const c = i, _ = p, B = s, k = v(!1), b = v(""), O = v(), d = v([]), j = (x) => {
    const e = l, a = U(_[e(431)]), r = [];
    a.forEach((o) => {
      const t = e;
      d.value[t(444)]((h) => {
        const n = t;
        o.searchKey == h[n(440)] && (o[n(466)] = h[n(466)]);
      }), r[t(421)]([o[t(440)], o[t(466)]]);
    });
    const f = Object.fromEntries(Array[e(467)](r)[e(457)](([o, t]) => [o, t]));
    x && x(f), M(() => {
      var t;
      const o = e;
      b[o(430)] = "", (t = O[o(430)]) == null || t.focus(), g(!1);
    });
  }, D = (x, e, a = "") => {
    const r = l, f = U(x);
    if (f[r(466)] = U(b[r(430)]) || a, !f.searchValue) return;
    const o = d[r(430)][r(447)]((t) => t && t[r(440)] == f[r(440)]);
    o > -1 ? d[r(430)][r(438)](o, 1, f) : d.value[r(421)](f), j(e);
  }, P = (x, e) => {
    const a = l;
    d.value[a(438)](x, 1), j(e);
  }, N = (x) => {
    D(x, (e) => {
      B(l(433), e);
    });
  }, z = (x) => {
    P(x, (e) => {
      B(l(433), e);
    });
  }, W = () => {
    d.value = [];
  }, u = v(-1), G = v(!1), g = (x) => {
    const e = l;
    G[e(430)] = x;
  }, J = (x) => {
    const e = l;
    if (x == e(456)) {
      let a = u[e(430)] < _.searchList[e(434)] - 1 ? u[e(430)] : -1;
      a++, u[e(430)] = a;
      return;
    }
    if (x == "up") {
      let a = u.value;
      a <= 0 ? a = _[e(431)][e(434)] - 1 : a--, u[e(430)] = a;
      return;
    }
    if (x == e(436)) {
      if (u[e(430)] > -1) {
        const a = _[e(431)][u[e(430)]];
        N(a);
      }
      return;
    }
    if (x == e(425)) {
      if (G.value) return;
      const a = d[e(430)][e(434)] - 1;
      a > -1 && !b[e(430)] && (g(!0), z(a));
      return;
    }
  }, Q = ae({ keyupSelect: (x) => {
    const e = l;
    return x == u.value ? e(455) : "";
  } }), Y = { 38: "up", 40: c(456), 13: "enter", 8: c(425) }, V = (x) => {
    const e = c;
    x && (x.keyCode != 8 && x[e(453)](), J(Y[x[e(449)]]));
  }, Z = T(() => {
    const x = c;
    return _[x(431)][x(434)] === 0 ? "无可查询项" : _[x(431)][x(457)]((e) => e[x(437)])[x(465)](",");
  }), R = T(() => {
    const x = c;
    return d[x(430)][x(434)] === 0 ? x(435) : "#1890ff";
  }), $ = () => {
    M(() => {
      const x = l;
      b[x(430)] = "", u[x(430)] = -1, d.value = [], k[x(430)] = !1, g(!1);
    });
  };
  return X(() => b[c(430)], (x) => {
    k.value = !!x;
  }), X(() => k[c(430)], (x) => {
    const e = c;
    !x && (b[e(430)] = "", u.value = -1);
  }), y({ setLimit: g, pushChange: D, resetSearch: W, clearText: $ }), (x, e) => {
    const a = c, r = S(a(463)), f = S(a(468)), o = S(a(464));
    return C(), I(a(451), ce, [K(o, { modelValue: k.value, "onUpdate:modelValue": e[1] || (e[1] = (t) => k[a(430)] = t) }, { default: q(() => [m(a(451), { class: "search-input", style: A({ borderColor: R[a(430)] }) }, [m(a(451), ne, [K(r, { icon: "search-line", style: A({ color: R.value }) }, null, 8, [a(439)])]), m(a(451), se, [(C(!0), I(F, null, H(d[a(430)], (t, h) => {
      const n = a;
      return C(), I(n(451), { key: h, class: n(432) }, [m(n(460), re, w(t[n(437)]), 1), m(n(460), oe, w(t[n(466)]), 1), m(n(460), { class: "tag-close", onClick: (ee) => z(h) }, "×", 8, le)]);
    }), 128))]), K(f, { ref_key: a(446), ref: O, modelValue: b[a(430)], "onUpdate:modelValue": e[0] || (e[0] = (t) => b[a(430)] = t), modelModifiers: { trim: !0 }, placeholder: Z[a(430)], onKeydown: [L(V, [a(425)]), L(V, ["down"]), L(V, [a(436)]), L(V, ["up"])] }, null, 8, [a(419), a(427)])], 4)]), dropdown: q(() => [m("ul", ie, [(C(!0), I(F, null, H(_.searchList, (t, h) => {
      const n = a;
      return C(), I("li", { key: t[n(440)], class: te(Q[n(442)](h)), onClick: (ee) => N(t) }, w(t[n(437)]) + ": " + w(b[n(430)]), 11, _e);
    }), 128))])]), _: 1 }, 8, [a(419)])]);
  };
} });
export {
  be as _
};
