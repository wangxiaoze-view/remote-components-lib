import { defineComponent as xe, ref as y, reactive as te, computed as A, watch as M, resolveComponent as S, openBlock as k, createElementBlock as C, createVNode as B, withCtx as N, createElementVNode as b, normalizeStyle as O, Fragment as P, renderList as Y, toDisplayString as L, withKeys as E, normalizeClass as ne, nextTick as q } from "vue";
import { cloneDeep as D } from "lodash-es";
const m = d;
(function(h, v) {
  const c = d, s = h();
  for (; ; )
    try {
      if (-parseInt(c(268)) / 1 + -parseInt(c(280)) / 2 * (-parseInt(c(257)) / 3) + -parseInt(c(252)) / 4 * (parseInt(c(242)) / 5) + -parseInt(c(251)) / 6 * (parseInt(c(239)) / 7) + parseInt(c(234)) / 8 * (-parseInt(c(276)) / 9) + parseInt(c(277)) / 10 * (-parseInt(c(270)) / 11) + -parseInt(c(283)) / 12 * (-parseInt(c(243)) / 13) === v) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(K, 763220);
function d(h, v) {
  const c = K();
  return d = function(s, l) {
    return s = s - 231, c[s];
  }, d(h, v);
}
function K() {
  const h = ["1106658eXnERs", "splice", "style", "searchList", "span", "map", "vab-icon", "placeholder", "preventDefault", "enter", "length", "58734ZYnBlT", "searchValue", "9532303ecArfv", "fromEntries", "tag-container", "el-input", "modelValue", "searchLabel", "2097cFOCQH", "10FkDHSn", "forEach", "inputEl", "4pydUBu", "findIndex", "focus", "134148QqUSxC", "search-line", "div", "keyupSelect", "48496dmEvEc", "emit-search", "search-tag", "value", "searchKey", "7HCDudP", "search-list-container", "#dcdfe6", "20MsIBWn", "5096IhYnCd", "from", "无可查询项", "PulldownSelect", "search-input", "onClick", "delete", "push", "3912114DdaKLL", "1366948KHQugL", "down", "tag-title", "hover-li", "keyCode"];
  return K = function() {
    return h;
  }, K();
}
const se = { class: "_remote-search-select-container" }, ce = { class: "search-icon" }, ae = { class: m(236) }, re = { class: "tag-label" }, oe = { class: m(254) }, de = [m(248)], le = { class: m(240) }, fe = [m(248)], ue = xe({ name: m(246), __name: "index", props: { searchList: {} }, emits: ["emit-search"], setup(h, { expose: v, emit: c }) {
  const s = m, l = h, V = c, I = y(!1), _ = y(""), H = y(), f = y([]), U = (t) => {
    const e = d, x = D(l[e(260)]), o = [];
    x[e(278)]((a) => {
      const n = e;
      f[n(237)].forEach((p) => {
        const r = n;
        a.searchKey == p[r(238)] && (a[r(269)] = p[r(269)]);
      }), o[n(250)]([a.searchKey, a[n(269)]]);
    });
    const u = Object[e(271)](Array[e(244)](o)[e(262)](([a, n]) => [a, n]));
    t && t(u), q(() => {
      var n;
      const a = e;
      _.value = "", (n = H[a(237)]) == null || n[a(282)](), g(!1);
    });
  }, F = (t, e, x = "") => {
    const o = d, u = D(t);
    if (u[o(269)] = D(_[o(237)]) || x, !u[o(269)]) return;
    const a = f.value[o(281)]((n) => n && n.searchKey == u.searchKey);
    a > -1 ? f[o(237)][o(258)](a, 1, u) : f[o(237)][o(250)](u), U(e);
  }, R = (t, e) => {
    const x = d;
    f[x(237)][x(258)](t, 1), U(e);
  }, Q = (t) => {
    F(t, (e) => {
      V(d(235), e);
    });
  }, T = (t) => {
    R(t, (e) => {
      V(d(235), e);
    });
  }, W = () => {
    const t = d;
    f[t(237)] = [];
  }, i = y(-1), j = y(!1), g = (t) => {
    j.value = t;
  }, X = (t) => {
    const e = d;
    if (t == e(253)) {
      let x = i[e(237)] < l.searchList.length - 1 ? i[e(237)] : -1;
      x++, i[e(237)] = x;
      return;
    }
    if (t == "up") {
      let x = i[e(237)];
      x <= 0 ? x = l[e(260)][e(267)] - 1 : x--, i[e(237)] = x;
      return;
    }
    if (t == e(266)) {
      if (i[e(237)] > -1) {
        const x = l.searchList[i[e(237)]];
        Q(x);
      }
      return;
    }
    if (t == e(249)) {
      if (j[e(237)]) return;
      const x = f[e(237)].length - 1;
      x > -1 && !_.value && (g(!0), T(x));
      return;
    }
  }, Z = te({ keyupSelect: (t) => {
    const e = d;
    return t == i.value ? e(255) : "";
  } }), G = { 38: "up", 40: s(253), 13: s(266), 8: s(249) }, w = (t) => {
    const e = s;
    t && (t.keyCode != 8 && t[e(265)](), X(G[t[e(256)]]));
  }, J = A(() => {
    const t = s;
    return l[t(260)][t(267)] === 0 ? t(245) : l[t(260)][t(262)]((e) => e[t(275)]).join(",");
  }), z = A(() => {
    const t = s;
    return f[t(237)][t(267)] === 0 ? t(241) : "#1890ff";
  }), $ = () => {
    q(() => {
      const t = d;
      _[t(237)] = "", i[t(237)] = -1, f.value = [], I.value = !1, g(!1);
    });
  };
  return M(() => _[s(237)], (t) => {
    const e = s;
    I[e(237)] = !!t;
  }), M(() => I.value, (t) => {
    const e = s;
    !t && (_[e(237)] = "", i[e(237)] = -1);
  }), v({ setLimit: g, pushChange: F, resetSearch: W, clearText: $ }), (t, e) => {
    const x = s, o = S(x(263)), u = S(x(273)), a = S("vxe-pulldown");
    return k(), C(x(232), se, [B(a, { modelValue: I[x(237)], "onUpdate:modelValue": e[1] || (e[1] = (n) => I.value = n) }, { default: N(() => [b(x(232), { class: x(247), style: O({ borderColor: z[x(237)] }) }, [b(x(232), ce, [B(o, { icon: x(231), style: O({ color: z[x(237)] }) }, null, 8, [x(259)])]), b(x(232), ae, [(k(!0), C(P, null, Y(f[x(237)], (n, p) => {
      const r = x;
      return k(), C(r(232), { key: p, class: r(272) }, [b(r(261), re, L(n[r(275)]), 1), b(r(261), oe, L(n.searchValue), 1), b("span", { class: "tag-close", onClick: (ee) => T(p) }, "×", 8, de)]);
    }), 128))]), B(u, { ref_key: x(279), ref: H, modelValue: _[x(237)], "onUpdate:modelValue": e[0] || (e[0] = (n) => _[x(237)] = n), modelModifiers: { trim: !0 }, placeholder: J[x(237)], onKeydown: [E(w, ["delete"]), E(w, ["down"]), E(w, [x(266)]), E(w, ["up"])] }, null, 8, [x(274), x(264)])], 4)]), dropdown: N(() => [b("ul", le, [(k(!0), C(P, null, Y(l[x(260)], (n, p) => {
      const r = x;
      return k(), C("li", { key: n[r(238)], class: ne(Z[r(233)](p)), onClick: (ee) => Q(n) }, L(n[r(275)]) + ": " + L(_[r(237)]), 11, fe);
    }), 128))])]), _: 1 }, 8, [x(274)])]);
  };
} });
export {
  ue as _
};
