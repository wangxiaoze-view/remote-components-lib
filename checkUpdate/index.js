import M from "fs";
import l from "chalk";
import S from "inquirer";
import { spawn as T } from "child_process";
(function(d, x) {
  const c = g, f = d();
  for (; ; )
    try {
      if (parseInt(c(510)) / 1 * (parseInt(c(504)) / 2) + parseInt(c(515)) / 3 + parseInt(c(482)) / 4 * (-parseInt(c(492)) / 5) + -parseInt(c(484)) / 6 * (-parseInt(c(479)) / 7) + parseInt(c(489)) / 8 * (parseInt(c(522)) / 9) + -parseInt(c(525)) / 10 + parseInt(c(529)) / 11 * (-parseInt(c(505)) / 12) === x) break;
      f.push(f.shift());
    } catch {
      f.push(f.shift());
    }
})(h, 769051);
function g(d, x) {
  const c = h();
  return g = function(f, p) {
    return f = f - 472, c[f];
  }, g(d, x);
}
function h() {
  const d = ["bigVersion", "18NKJqRP", "vue", "proVersion", "filter", "join", "2408jhhUez", "toString", "smallVersion", "10mHNJIM", "list", "version", `
 安装成功, 重新执行 install 命令`, "match", `
⬆ 小版本依赖更新提示：处理版本兼容与项目版本一致~`, "red", "dependencies", "table", "name", "请选择依赖进行大版本更新?", `
 保证插件版本与项目版本一致，否则可能会导致项目运行异常 
`, "2420746tFEdFj", "1832856TXZAFm", "push", "子进程退出，退出码：", "manager", "prompt", "1fXOiSd", `
 安装失败, 重新执行 install 命令`, "length", "yarn", `
 依赖正在更新中, 请稍等... 
`, "1043727XskNKg", "pnpm", "vant", "development", "bold", "padEnd", "请选择安装依赖的方式?", "8973TlxohY", `
 当前的环境为 生产环境，为保证项目的稳定运行, 线上不支持自动更新 
 `, "请选择依赖进行小版本更新?", "7822100ITJWsD", "stdout", "map", "entries", "110swOAfd", "log", "close", "green", "includes", "checkbox", "npm", "max", "/package.json", "stringify", "element-plus", "data", "2904006HBfNob", "版本说明：插件依赖的版本为：", "peerDependencies", "48624MiOfAA"];
  return h = function() {
    return d;
  }, h();
}
async function q(d) {
  const x = g;
  console[x(530)](l[x(498)][x(519)](x(503)));
  let c = {};
  const f = [x(477), x(485), x(517)];
  function p(t) {
    const e = x, n = t[e(496)](/\d+/g);
    return { versionString: (n == null ? void 0 : n[e(488)]("")) || "", versionBig: n && n[e(512)] ? n[0] : "" };
  }
  function w(t, e) {
    const n = x;
    let { versionString: s } = p(t), { versionString: r } = p(e);
    const o = Math[n(474)](s[n(512)], r[n(512)]);
    return s[n(512)] < o && (s = s[n(520)](o, "0")), r[n(512)] < o && (r = r.padEnd(o, "0")), Number(r) > Number(s);
  }
  function j(t, e) {
    const { versionBig: n } = p(t), { versionBig: s } = p(e);
    return Number(s) > Number(n);
  }
  function A(t, e, n) {
    const s = x, r = [], o = [], i = { name: t, proVersion: e, version: c[s(481)][t] };
    w(e, c[s(481)][t]) && r[s(506)](i), j(e, c[s(481)][t]) && o[s(506)](i), n && n({ smallConfig: r, bigConfig: o });
  }
  async function E(t, e, n, s, r) {
    const o = x;
    try {
      const i = await S[o(509)](t);
      if ((i.smallVersion || [])[o(512)] > 0 || (i[o(483)] || [])[o(512)] > 0) {
        const v = await S.prompt(e);
        if (v[o(508)] === "跳过") throw new Error("进程已退出 ⏏️");
        const V = n[o(527)]((a) => i.smallVersion[o(533)](a[o(501)]) ? a : null).filter(Boolean), P = s[o(527)]((a) => i[o(483)][o(533)](a[o(501)]) ? a : null)[o(487)](Boolean), B = [...V, ...P];
        for (let a = 0; a < B[o(512)]; a++) {
          const b = B[a];
          c[o(481)][b.name] && (c.peerDependencies[b[o(501)]] = "" + b[o(486)]);
        }
        r && M.writeFile(r + o(475), JSON[o(476)](c, null, 2), (a) => {
          a ? console.error(a) : O(v[o(508)]);
        });
      }
    } catch (i) {
      console[o(530)](i);
    }
  }
  function O(t) {
    const e = x;
    console[e(530)](l[e(532)][e(519)](e(514)));
    const n = T(t, ["install"], {});
    n[e(526)].on(e(478), (s) => {
      console.log("" + s[e(490)]());
    }), n.on(e(531), (s) => {
      const r = e;
      console[r(530)](r(507) + s), s === 0 ? console[r(530)](l.red.bold(r(495))) : console[r(530)](l[r(498)][r(519)](r(511)));
    });
  }
  const { pkg: C, include: D = f, mode: F = x(518), dir: J, pluginPkg: y, exclude: I = [] } = d, N = [], u = [];
  if (!y) return console[x(530)](l.red[x(519)](`
 pluginPkg参数不能为空, 缺少插件依赖包，请检查插件依赖包是否存在！
`));
  c = y || {};
  const k = (t) => {
    const e = x;
    return t[e(527)]((n) => ({ name: n.name, version: n[e(494)], proVersion: n.proVersion, tip: e(480) + n[e(494)] + ", 项目依赖的版本为：" + n[e(486)] }));
  };
  I == null || I.forEach((t) => {
    c[x(481)][t] && delete c.peerDependencies[t];
  });
  for (const [t, e] of Object[x(528)](C[x(499)]))
    D[x(533)](t) && A(t, e, ({ smallConfig: n, bigConfig: s }) => {
      const r = x;
      N[r(506)](...n), u[r(506)](...s);
    });
  const _ = k(N[x(487)]((t) => {
    const e = x;
    return u[e(512)] ? u.find((n) => t[e(501)] !== n.name) : t;
  }));
  _[x(512)] && (console.log(l.greenBright[x(519)](x(497))), console.table(_));
  const m = k(u);
  if (m[x(512)] && (console[x(530)](l[x(498)][x(519)](`
⬆ 大版本依赖更新提示：如果进行升更新会直接升级会导致项目组件的兼容问题，新版本的API不兼容`)), console[x(500)](m)), F === "development") {
    console[x(530)](l[x(498)][x(519)](`
 当前的环境为 开发环境
 `));
    const t = _[x(512)] ? [{ type: x(472), choices: _[x(527)]((s) => s[x(501)]), name: x(491), message: x(524) }] : [], e = m[x(512)] ? [{ type: x(472), choices: m[x(527)]((s) => s[x(501)]), name: x(483), message: x(502) }] : [], n = [{ type: x(493), choices: [x(473), x(513), x(516), "跳过"], name: x(508), message: x(521) }];
    await E([...t, ...e], n, _, m, J);
  } else console.log(l.red[x(519)](x(523)));
}
export {
  q as default
};
