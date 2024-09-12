import R from "fs";
import f from "chalk";
import C from "inquirer";
import { spawn as Z } from "child_process";
(function(d, x) {
  const s = g, i = d();
  for (; ; )
    try {
      if (-parseInt(s(468)) / 1 + -parseInt(s(462)) / 2 + parseInt(s(420)) / 3 + parseInt(s(471)) / 4 + parseInt(s(427)) / 5 + parseInt(s(432)) / 6 * (parseInt(s(463)) / 7) + parseInt(s(470)) / 8 * (-parseInt(s(422)) / 9) === x) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(h, 242669);
function g(d, x) {
  const s = h();
  return g = function(i, b) {
    return i = i - 415, s[i];
  }, g(d, x);
}
function h() {
  const d = ["smallVersion", ", 项目依赖的版本为：", "development", `
 安装失败, 重新执行 install 命令`, "1418765XwoqHF", "max", `
 当前的环境为 生产环境，为保证项目的稳定运行, 线上不支持自动更新 
 `, "match", "npm", "1259160IazavZ", "table", "checkbox", "toString", "filter", "pnpm", "请选择依赖进行大版本更新?", "stringify", "red", `
 当前的环境为 开发环境
 `, "list", "proVersion", `
 安装成功, 重新执行 install 命令`, "bigVersion", "vue", "close", "padEnd", "log", "prompt", "peerDependencies", `
 保证插件版本与项目版本一致，否则可能会导致项目运行异常 
`, "stdout", "bold", "includes", "map", "length", "vant", "entries", "find", `
 pluginPkg参数不能为空, 缺少插件依赖包，请检查插件依赖包是否存在！
`, "810962AHkKfH", "7WxfCJN", "forEach", "version", `
 依赖正在更新中, 请稍等... 
`, `
⬆ 大版本依赖更新提示：如果进行升更新会直接升级会导致项目组件的兼容问题，新版本的API不兼容`, "191382LPlXYZ", "请选择依赖进行小版本更新?", "8BbMZpj", "1840500RNDRAy", "name", "yarn", "push", "/package.json", "manager", `
⬆ 小版本依赖更新提示：处理版本兼容与项目版本一致~`, "element-plus", "1035588MoxKKL", "install", "4134618aRqUIx"];
  return h = function() {
    return d;
  }, h();
}
async function O(d) {
  const x = g;
  console[x(449)](f.red[x(454)](x(452)));
  let s = {};
  const i = [x(419), x(446), x(458)];
  function b(c) {
    const n = x, e = c[n(430)](/\d+/g);
    return { versionString: (e == null ? void 0 : e.join("")) || "", versionBig: e && e[n(457)] ? e[0] : "" };
  }
  function y(c, n) {
    const e = x;
    let { versionString: a } = b(c), { versionString: t } = b(n);
    const o = Math[e(428)](a.length, t.length);
    return a.length < o && (a = a[e(448)](o, "0")), t[e(457)] < o && (t = t[e(448)](o, "0")), Number(t) > Number(a);
  }
  function S(c, n) {
    const { versionBig: e } = b(c), { versionBig: a } = b(n);
    return Number(a) > Number(e);
  }
  function j(c, n, e) {
    const a = x, t = [], o = [], l = { name: c, proVersion: n, version: s[a(451)][c] };
    y(n, s[a(451)][c]) && t[a(415)](l), S(n, s[a(451)][c]) && o[a(415)](l), e && e({ smallConfig: t, bigConfig: o });
  }
  async function P(c, n, e, a, t) {
    const o = x;
    try {
      const l = await C[o(450)](c);
      if ((l[o(423)] || [])[o(457)] > 0 || (l[o(445)] || []).length > 0) {
        const I = await C.prompt(n);
        if (I[o(417)] === "跳过") throw new Error("进程已退出 ⏏️");
        const B = e[o(456)]((r) => l[o(423)][o(455)](r[o(472)]) ? r : null).filter(Boolean), M = a[o(456)]((r) => l.bigVersion.includes(r[o(472)]) ? r : null)[o(436)](Boolean), N = [...B, ...M];
        for (let r = 0; r < N[o(457)]; r++) {
          const m = N[r];
          s[o(451)][m[o(472)]] && (s[o(451)][m[o(472)]] = "" + m[o(443)]);
        }
        t && R.writeFile(t + o(416), JSON[o(439)](s, null, 2), (r) => {
          r ? console.error(r) : A(I[o(417)]);
        });
      }
    } catch (l) {
      console[o(449)](l);
    }
  }
  function A(c) {
    const n = x;
    console[n(449)](f.green[n(454)](n(466)));
    const e = Z(c, [n(421)], {});
    e[n(453)].on("data", (a) => {
      const t = n;
      console[t(449)]("" + a[t(435)]());
    }), e.on(n(447), (a) => {
      const t = n;
      console.log("子进程退出，退出码：" + a), a === 0 ? console[t(449)](f[t(440)][t(454)](t(444))) : console[t(449)](f[t(440)][t(454)](t(426)));
    });
  }
  const { pkg: D, include: E = i, mode: H = x(425), dir: K, pluginPkg: w, exclude: v = [] } = d, k = [], u = [];
  if (!w) return console[x(449)](f[x(440)][x(454)](x(461)));
  s = w || {};
  const V = (c) => {
    const n = x;
    return c[n(456)]((e) => ({ name: e.name, version: e[n(465)], proVersion: e.proVersion, tip: "版本说明：插件依赖的版本为：" + e[n(465)] + n(424) + e.proVersion }));
  };
  v == null || v[x(464)]((c) => {
    const n = x;
    s.peerDependencies[c] && delete s[n(451)][c];
  });
  for (const [c, n] of Object[x(459)](D.dependencies))
    E.includes(c) && j(c, n, ({ smallConfig: e, bigConfig: a }) => {
      const t = x;
      k[t(415)](...e), u[t(415)](...a);
    });
  const p = V(k[x(436)]((c) => {
    const n = x;
    return u[n(457)] ? u[n(460)]((e) => c.name !== e[n(472)]) : c;
  }));
  p[x(457)] && (console[x(449)](f.greenBright[x(454)](x(418))), console[x(433)](p));
  const _ = V(u);
  if (_[x(457)] && (console[x(449)](f[x(440)][x(454)](x(467))), console[x(433)](_)), H === x(425)) {
    console.log(f[x(440)][x(454)](x(441)));
    const c = p[x(457)] ? [{ type: x(434), choices: p.map((a) => a[x(472)]), name: x(423), message: x(469) }] : [], n = _[x(457)] ? [{ type: x(434), choices: _.map((a) => a[x(472)]), name: x(445), message: x(438) }] : [], e = [{ type: x(442), choices: [x(431), x(473), x(437), "跳过"], name: x(417), message: "请选择安装依赖的方式?" }];
    await P([...c, ...n], e, p, _, K);
  } else console[x(449)](f.red[x(454)](x(429)));
}
export {
  O as default
};
