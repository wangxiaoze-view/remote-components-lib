import q from "fs";
import b from "chalk";
import M from "inquirer";
import { spawn as J } from "child_process";
(function(f, x) {
  const s = m, i = f();
  for (; ; )
    try {
      if (parseInt(s(385)) / 1 + parseInt(s(430)) / 2 * (parseInt(s(436)) / 3) + -parseInt(s(420)) / 4 * (parseInt(s(412)) / 5) + parseInt(s(419)) / 6 + -parseInt(s(393)) / 7 + -parseInt(s(418)) / 8 * (-parseInt(s(404)) / 9) + -parseInt(s(406)) / 10 * (-parseInt(s(416)) / 11) === x) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(h, 632435);
function m(f, x) {
  const s = h();
  return m = function(i, d) {
    return i = i - 378, s[i];
  }, m(f, x);
}
function h() {
  const f = ["198462vlTMjC", "green", "includes", "/package.json", "greenBright", "peerDependencies", `
⬆ 大版本依赖更新提示：如果进行升更新会直接升级会导致项目组件的兼容问题，新版本的API不兼容`, "max", "8185296KKcxio", "log", "进程已退出 ⏏️", "请选择依赖进行小版本更新?", "smallVersion", "bold", "error", "请选择依赖进行大版本更新?", "length", `
 pluginPkg参数不能为空, 缺少插件依赖包，请检查插件依赖包是否存在！
`, "element-plus", "208368djkbrI", "filter", "20BUDMUB", `
⬆ 小版本依赖更新提示：处理版本兼容与项目版本一致~`, "list", ", 项目依赖的版本为：", `
 安装失败, 重新执行 install 命令`, "vant", "230KTnqgt", "map", "development", "install", "3355759CYZyUJ", "bigVersion", "88jxYaiW", "5753658aMqleM", "66832IxgYPS", "data", "请选择安装依赖的方式?", `
 依赖正在更新中, 请稍等... 
`, "pnpm", "dependencies", "push", "name", "prompt", "vue", "548116rILYMl", "proVersion", "entries", "stdout", `
 安装成功, 重新执行 install 命令`, "checkbox", "6pNfRdU", "manager", "forEach", "yarn", "red", "版本说明：插件依赖的版本为：", "toString", "npm", "stringify", "table", `
 保证插件版本与项目版本一致，否则可能会导致项目运行异常 
`, "version"];
  return h = function() {
    return f;
  }, h();
}
async function L(f) {
  const x = m;
  console[x(394)](b[x(440)].bold(x(383)));
  let s = {};
  const i = [x(403), x(429), x(411)];
  function d(o) {
    const e = x, n = o.match(/\d+/g);
    return { versionString: (n == null ? void 0 : n.join("")) || "", versionBig: n && n[e(401)] ? n[0] : "" };
  }
  function y(o, e) {
    const n = x;
    let { versionString: t } = d(o), { versionString: c } = d(e);
    const a = Math[n(392)](t[n(401)], c.length);
    return t[n(401)] < a && (t = t.padEnd(a, "0")), c[n(401)] < a && (c = c.padEnd(a, "0")), Number(c) > Number(t);
  }
  function N(o, e) {
    const { versionBig: n } = d(o), { versionBig: t } = d(e);
    return Number(t) > Number(n);
  }
  function S(o, e, n) {
    const t = x, c = [], a = [], l = { name: o, proVersion: e, version: s.peerDependencies[o] };
    y(e, s[t(390)][o]) && c[t(426)](l), N(e, s.peerDependencies[o]) && a[t(426)](l), n && n({ smallConfig: c, bigConfig: a });
  }
  async function V(o, e, n, t, c) {
    const a = x;
    try {
      const l = await M.prompt(o);
      if ((l[a(397)] || [])[a(401)] > 0 || (l[a(417)] || [])[a(401)] > 0) {
        const v = await M[a(428)](e);
        if (v[a(437)] === "跳过") throw new Error(a(395));
        const j = n[a(413)]((r) => l[a(397)].includes(r.name) ? r : null)[a(405)](Boolean), K = t.map((r) => l[a(417)][a(387)](r[a(427)]) ? r : null)[a(405)](Boolean), C = [...j, ...K];
        for (let r = 0; r < C[a(401)]; r++) {
          const p = C[r];
          s[a(390)][p[a(427)]] && (s[a(390)][p[a(427)]] = "" + p[a(431)]);
        }
        c && q.writeFile(c + a(388), JSON[a(381)](s, null, 2), (r) => {
          const p = a;
          r ? console[p(399)](r) : D(v[p(437)]);
        });
      }
    } catch (l) {
      console.log(l);
    }
  }
  function D(o) {
    const e = x;
    console[e(394)](b[e(386)][e(398)](e(423)));
    const n = J(o, [e(415)], {});
    n[e(433)].on(e(421), (t) => {
      console.log("" + t[e(379)]());
    }), n.on("close", (t) => {
      const c = e;
      console[c(394)]("子进程退出，退出码：" + t), t === 0 ? console[c(394)](b[c(440)][c(398)](c(434))) : console[c(394)](b.red[c(398)](c(410)));
    });
  }
  const { pkg: U, include: E = i, mode: P = x(414), dir: Y, pluginPkg: k, exclude: I = [] } = f, w = [], g = [];
  if (!k) return console.log(b[x(440)][x(398)](x(402)));
  s = k || {};
  const B = (o) => {
    const e = x;
    return o[e(413)]((n) => ({ name: n[e(427)], version: n[e(384)], proVersion: n[e(431)], tip: e(378) + n.version + e(409) + n.proVersion }));
  };
  I == null || I[x(438)]((o) => {
    const e = x;
    s.peerDependencies[o] && delete s[e(390)][o];
  });
  for (const [o, e] of Object[x(432)](U[x(425)]))
    E[x(387)](o) && S(o, e, ({ smallConfig: n, bigConfig: t }) => {
      const c = x;
      w[c(426)](...n), g[c(426)](...t);
    });
  const _ = B(w.filter((o) => {
    const e = x;
    return g.length ? g.find((n) => o[e(427)] !== n[e(427)]) : o;
  }));
  _[x(401)] && (console[x(394)](b[x(389)][x(398)](x(407))), console[x(382)](_));
  const u = B(g);
  if (u.length && (console[x(394)](b[x(440)].bold(x(391))), console[x(382)](u)), P === x(414)) {
    console[x(394)](b.red[x(398)](`
 当前的环境为 开发环境
 `));
    const o = _.length ? [{ type: "checkbox", choices: _[x(413)]((t) => t[x(427)]), name: x(397), message: x(396) }] : [], e = u[x(401)] ? [{ type: x(435), choices: u[x(413)]((t) => t[x(427)]), name: x(417), message: x(400) }] : [], n = [{ type: x(408), choices: [x(380), x(439), x(424), "跳过"], name: x(437), message: x(422) }];
    await V([...o, ...e], n, _, u, Y);
  } else console[x(394)](b[x(440)].bold(`
 当前的环境为 生产环境，为保证项目的稳定运行, 线上不支持自动更新 
 `));
}
export {
  L as default
};
