import { defineComponent as x0, ref as v, reactive as c0, computed as M, watch as N, resolveComponent as S, openBlock as I, createElementBlock as g, createVNode as j, withCtx as R, createElementVNode as m, normalizeStyle as U, Fragment as G, renderList as H, toDisplayString as V, withKeys as L, normalizeClass as t0, nextTick as J } from "vue";
import { cloneDeep as D } from "lodash-es";
function s(b, y) {
  const n = E();
  return s = function(d, i) {
    return d = d - 173, n[d];
  }, s(b, y);
}
const l = s;
(function(b, y) {
  const n = s, d = b();
  for (; ; )
    try {
      if (parseInt(n(219)) / 1 * (-parseInt(n(186)) / 2) + parseInt(n(213)) / 3 + parseInt(n(194)) / 4 * (parseInt(n(222)) / 5) + parseInt(n(201)) / 6 + -parseInt(n(189)) / 7 * (parseInt(n(181)) / 8) + parseInt(n(212)) / 9 + -parseInt(n(193)) / 10 === y) break;
      d.push(d.shift());
    } catch {
      d.push(d.shift());
    }
})(E, 454461);
const d0 = { class: l(195) }, n0 = { class: l(198) }, s0 = { class: l(206) }, a0 = { class: l(208) }, o0 = { class: l(176) }, r0 = ["onClick"], l0 = { class: l(184) }, i0 = [l(183)];
function E() {
  const b = ["4731438pEoIMi", "inputEl", "无可查询项", "join", "value", "search-tag", "length", "tag-label", "vab-icon", "enter", "from", "1186524uWpfAI", "2062176ogAqqL", "keyCode", "forEach", "searchKey", "searchList", "delete", "90394xHGZFk", "tag-container", "div", "4287550KQfWDg", "keyupSelect", "push", "hover-li", "span", "tag-title", "style", "searchLabel", "splice", "down", "8KweWlo", "index", "onClick", "search-list-container", "PulldownSelect", "16bvqJgj", "modelValue", "el-input", "5682033KRTpSC", "placeholder", "preventDefault", "searchValue", "4759790rjEoyb", "4xvIRlc", "_remote-search-select-container", "fromEntries", "#dcdfe6", "search-icon", "emit-search", "findIndex"];
  return E = function() {
    return b;
  }, E();
}
const f0 = x0({ name: l(185), __name: l(182), props: { searchList: {} }, emits: [l(199)], setup(b, { expose: y, emit: n }) {
  const d = l, i = b, K = n, k = v(!1), f = v(""), q = v(), _ = v([]), A = (x) => {
    const e = s, c = D(i[e(217)]), r = [];
    c[e(215)]((a) => {
      const t = e;
      _.value[t(215)]((h) => {
        const o = t;
        a[o(216)] == h.searchKey && (a[o(192)] = h[o(192)]);
      }), r[t(173)]([a[t(216)], a.searchValue]);
    });
    const p = Object[e(196)](Array[e(211)](r).map(([a, t]) => [a, t]));
    x && x(p), J(() => {
      var t;
      const a = e;
      f.value = "", (t = q[a(205)]) == null || t.focus(), C(!1);
    });
  }, B = (x, e, c = "") => {
    const r = s, p = D(x);
    if (p[r(192)] = D(f.value) || c, !p.searchValue) return;
    const a = _.value[r(200)]((t) => t && t[r(216)] == p[r(216)]);
    a > -1 ? _[r(205)][r(179)](a, 1, p) : _[r(205)].push(p), A(e);
  }, O = (x, e) => {
    const c = s;
    _.value[c(179)](x, 1), A(e);
  }, T = (x) => {
    B(x, (e) => {
      K(s(199), e);
    });
  }, W = (x) => {
    O(x, (e) => {
      K(s(199), e);
    });
  }, P = () => {
    const x = s;
    _[x(205)] = [];
  }, u = v(-1), z = v(!1), C = (x) => {
    const e = s;
    z[e(205)] = x;
  }, Q = (x) => {
    const e = s;
    if (x == e(180)) {
      let c = u[e(205)] < i.searchList[e(207)] - 1 ? u[e(205)] : -1;
      c++, u[e(205)] = c;
      return;
    }
    if (x == "up") {
      let c = u[e(205)];
      c <= 0 ? c = i[e(217)].length - 1 : c--, u[e(205)] = c;
      return;
    }
    if (x == e(210)) {
      if (u.value > -1) {
        const c = i.searchList[u[e(205)]];
        T(c);
      }
      return;
    }
    if (x == e(218)) {
      if (z.value) return;
      const c = _[e(205)][e(207)] - 1;
      c > -1 && !f[e(205)] && (C(!0), W(c));
      return;
    }
  }, Z = c0({ keyupSelect: (x) => {
    const e = s;
    return x == u[e(205)] ? e(174) : "";
  } }), X = { 38: "up", 40: d(180), 13: d(210), 8: "delete" }, w = (x) => {
    const e = d;
    x && (x[e(214)] != 8 && x[e(191)](), Q(X[x[e(214)]]));
  }, Y = M(() => {
    const x = d;
    return i[x(217)][x(207)] === 0 ? x(203) : i[x(217)].map((e) => e[x(178)])[x(204)](",");
  }), F = M(() => {
    const x = d;
    return _[x(205)][x(207)] === 0 ? x(197) : "#1890ff";
  }), $ = () => {
    J(() => {
      const x = s;
      f[x(205)] = "", u[x(205)] = -1, _[x(205)] = [], k.value = !1, C(!1);
    });
  };
  return N(() => f[d(205)], (x) => {
    const e = d;
    k[e(205)] = !!x;
  }), N(() => k[d(205)], (x) => {
    const e = d;
    !x && (f.value = "", u[e(205)] = -1);
  }), y({ setLimit: C, pushChange: B, resetSearch: P, clearText: $ }), (x, e) => {
    const c = d, r = S(c(209)), p = S(c(188)), a = S("vxe-pulldown");
    return I(), g(c(221), d0, [j(a, { modelValue: k[c(205)], "onUpdate:modelValue": e[1] || (e[1] = (t) => k.value = t) }, { default: R(() => [m("div", { class: "search-input", style: U({ borderColor: F.value }) }, [m(c(221), n0, [j(r, { icon: "search-line", style: U({ color: F[c(205)] }) }, null, 8, [c(177)])]), m(c(221), s0, [(I(!0), g(G, null, H(_.value, (t, h) => {
      const o = c;
      return I(), g(o(221), { key: h, class: o(220) }, [m("span", a0, V(t.searchLabel), 1), m(o(175), o0, V(t[o(192)]), 1), m("span", { class: "tag-close", onClick: (e0) => W(h) }, "×", 8, r0)]);
    }), 128))]), j(p, { ref_key: c(202), ref: q, modelValue: f[c(205)], "onUpdate:modelValue": e[0] || (e[0] = (t) => f[c(205)] = t), modelModifiers: { trim: !0 }, placeholder: Y[c(205)], onKeydown: [L(w, [c(218)]), L(w, [c(180)]), L(w, [c(210)]), L(w, ["up"])] }, null, 8, [c(187), c(190)])], 4)]), dropdown: R(() => [m("ul", l0, [(I(!0), g(G, null, H(i[c(217)], (t, h) => {
      const o = c;
      return I(), g("li", { key: t[o(216)], class: t0(Z[o(223)](h)), onClick: (e0) => T(t) }, V(t[o(178)]) + ": " + V(f[o(205)]), 11, i0);
    }), 128))])]), _: 1 }, 8, [c(187)])]);
  };
} });
export {
  f0 as _
};
