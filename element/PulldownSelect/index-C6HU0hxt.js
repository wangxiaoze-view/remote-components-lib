import { defineComponent as xe, ref as v, reactive as ae, computed as j, watch as A, resolveComponent as K, openBlock as I, createElementBlock as g, createVNode as G, withCtx as M, createElementVNode as h, normalizeStyle as P, Fragment as Q, renderList as Y, toDisplayString as C, withKeys as L, normalizeClass as ce, nextTick as Z } from "vue";
import { cloneDeep as z } from "lodash-es";
const m = r;
(function(f, y) {
  const n = r, t = f();
  for (; ; )
    try {
      if (-parseInt(n(451)) / 1 * (-parseInt(n(473)) / 2) + -parseInt(n(446)) / 3 + -parseInt(n(441)) / 4 + -parseInt(n(466)) / 5 + -parseInt(n(429)) / 6 * (parseInt(n(433)) / 7) + parseInt(n(461)) / 8 * (-parseInt(n(470)) / 9) + parseInt(n(444)) / 10 * (parseInt(n(471)) / 11) === y) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(S, 783195);
function S() {
  const f = ["searchValue", "emit-search", "focus", "5114820IcIQTI", "from", "span", "9910YGFSWk", "#1890ff", "3178029yqZKUg", "enter", "searchKey", "modelValue", "delete", "1OYAVmG", "index", "placeholder", "push", "search-tag", "#dcdfe6", "splice", "onClick", "fromEntries", "down", "12483856DkFNgC", "hover-li", "vab-icon", "div", "PulldownSelect", "4514440wKzwGn", "inputEl", "search-line", "keyCode", "9lgLOPh", "65967vMQbJG", "vxe-pulldown", "817702GxaEpz", "tag-close", "style", "forEach", "searchLabel", "searchList", "6VppUZe", "join", "length", "map", "5370855llogyT", "value", "_remote-search-select-container", "keyupSelect", "preventDefault"];
  return S = function() {
    return f;
  }, S();
}
function r(f, y) {
  const n = S();
  return r = function(t, b) {
    return t = t - 425, n[t];
  }, r(f, y);
}
const te = { class: m(435) }, ne = { class: "search-icon" }, se = { class: m(455) }, re = { class: "tag-label" }, le = { class: "tag-title" }, oe = [m(458)], be = { class: "search-list-container" }, ie = ["onClick"], de = xe({ name: m(465), __name: m(452), props: { searchList: {} }, emits: [m(439)], setup(f, { expose: y, emit: n }) {
  const t = m, b = f, E = n, k = v(!1), _ = v(""), D = v(), i = v([]), T = (x) => {
    const e = r, a = z(b[e(428)]), l = [];
    a[e(426)]((s) => {
      const c = e;
      i.value[c(426)]((p) => {
        const o = c;
        s[o(448)] == p.searchKey && (s[o(438)] = p[o(438)]);
      }), l[c(454)]([s[c(448)], s.searchValue]);
    });
    const d = Object[e(459)](Array[e(442)](l)[e(432)](([s, c]) => [s, c]));
    x && x(d), Z(() => {
      var c;
      const s = e;
      _.value = "", (c = D.value) == null || c[s(440)](), V(!1);
    });
  }, U = (x, e, a = "") => {
    const l = r, d = z(x);
    if (d[l(438)] = z(_.value) || a, !d.searchValue) return;
    const s = i[l(434)].findIndex((c) => c && c[l(448)] == d[l(448)]);
    s > -1 ? i[l(434)][l(457)](s, 1, d) : i.value[l(454)](d), T(e);
  }, q = (x, e) => {
    const a = r;
    i.value[a(457)](x, 1), T(e);
  }, B = (x) => {
    U(x, (e) => {
      E(r(439), e);
    });
  }, F = (x) => {
    q(x, (e) => {
      E("emit-search", e);
    });
  }, J = () => {
    const x = r;
    i[x(434)] = [];
  }, u = v(-1), N = v(!1), V = (x) => {
    const e = r;
    N[e(434)] = x;
  }, W = (x) => {
    const e = r;
    if (x == "down") {
      let a = u.value < b[e(428)][e(431)] - 1 ? u.value : -1;
      a++, u.value = a;
      return;
    }
    if (x == "up") {
      let a = u[e(434)];
      a <= 0 ? a = b.searchList[e(431)] - 1 : a--, u[e(434)] = a;
      return;
    }
    if (x == "enter") {
      if (u[e(434)] > -1) {
        const a = b.searchList[u[e(434)]];
        B(a);
      }
      return;
    }
    if (x == e(450)) {
      if (N[e(434)]) return;
      const a = i[e(434)][e(431)] - 1;
      a > -1 && !_[e(434)] && (V(!0), F(a));
      return;
    }
  }, H = ae({ keyupSelect: (x) => {
    const e = r;
    return x == u[e(434)] ? e(462) : "";
  } }), R = { 38: "up", 40: t(460), 13: t(447), 8: t(450) }, w = (x) => {
    const e = t;
    x && (x[e(469)] != 8 && x[e(437)](), W(R[x[e(469)]]));
  }, X = j(() => {
    const x = t;
    return b[x(428)][x(431)] === 0 ? "无可查询项" : b[x(428)].map((e) => e.searchLabel)[x(430)](",");
  }), O = j(() => {
    const x = t;
    return i[x(434)][x(431)] === 0 ? x(456) : x(445);
  }), $ = () => {
    Z(() => {
      const x = r;
      _.value = "", u.value = -1, i.value = [], k[x(434)] = !1, V(!1);
    });
  };
  return A(() => _[t(434)], (x) => {
    const e = t;
    k[e(434)] = !!x;
  }), A(() => k[t(434)], (x) => {
    !x && (_.value = "", u.value = -1);
  }), y({ setLimit: V, pushChange: U, resetSearch: J, clearText: $ }), (x, e) => {
    const a = t, l = K(a(463)), d = K("el-input"), s = K(a(472));
    return I(), g(a(464), te, [G(s, { modelValue: k[a(434)], "onUpdate:modelValue": e[1] || (e[1] = (c) => k[a(434)] = c) }, { default: M(() => [h(a(464), { class: "search-input", style: P({ borderColor: O[a(434)] }) }, [h(a(464), ne, [G(l, { icon: a(468), style: P({ color: O.value }) }, null, 8, [a(425)])]), h("div", se, [(I(!0), g(Q, null, Y(i[a(434)], (c, p) => {
      const o = a;
      return I(), g("div", { key: p, class: "tag-container" }, [h(o(443), re, C(c.searchLabel), 1), h("span", le, C(c.searchValue), 1), h(o(443), { class: o(474), onClick: (ee) => F(p) }, "×", 8, oe)]);
    }), 128))]), G(d, { ref_key: a(467), ref: D, modelValue: _[a(434)], "onUpdate:modelValue": e[0] || (e[0] = (c) => _[a(434)] = c), modelModifiers: { trim: !0 }, placeholder: X[a(434)], onKeydown: [L(w, ["delete"]), L(w, [a(460)]), L(w, ["enter"]), L(w, ["up"])] }, null, 8, [a(449), a(453)])], 4)]), dropdown: M(() => [h("ul", be, [(I(!0), g(Q, null, Y(b.searchList, (c, p) => {
      const o = a;
      return I(), g("li", { key: c[o(448)], class: ce(H[o(436)](p)), onClick: (ee) => B(c) }, C(c[o(427)]) + ": " + C(_[o(434)]), 11, ie);
    }), 128))])]), _: 1 }, 8, [a(449)])]);
  };
} });
export {
  de as _
};
