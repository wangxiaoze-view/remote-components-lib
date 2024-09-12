import J from "fs";
import f from "chalk";
import N from "inquirer";
import { spawn as M } from "child_process";
function u(p, x) {
  const r = b();
  return u = function(i, d) {
    return i = i - 294, r[i];
  }, u(p, x);
}
(function(p, x) {
  const r = u, i = p();
  for (; ; )
    try {
      if (parseInt(r(311)) / 1 * (parseInt(r(351)) / 2) + parseInt(r(294)) / 3 + -parseInt(r(305)) / 4 * (-parseInt(r(343)) / 5) + -parseInt(r(328)) / 6 * (-parseInt(r(312)) / 7) + -parseInt(r(338)) / 8 * (parseInt(r(335)) / 9) + -parseInt(r(325)) / 10 + parseInt(r(315)) / 11 * (parseInt(r(314)) / 12) === x) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(b, 991757);
function b() {
  const p = ["map", "close", "请选择依赖进行大版本更新?", "checkbox", "proVersion", "6MZsuJv", `
⬆ 大版本依赖更新提示：如果进行升更新会直接升级会导致项目组件的兼容问题，新版本的API不兼容`, "bold", "length", "smallVersion", "npm", "857247WgvfiA", "log", "development", "/package.json", `
 安装失败, 重新执行 install 命令`, "padEnd", "stdout", "vue", "max", "name", "dependencies", "375052pOsezF", "data", "yarn", `
⬆ 小版本依赖更新提示：处理版本兼容与项目版本一致~`, "push", "版本说明：插件依赖的版本为：", "434373YsCqsI", "1120tcReYT", `
 当前的环境为 开发环境
 `, "96ZOjmPp", "810799wHdmFt", "greenBright", "join", "includes", `
 保证插件版本与项目版本一致，否则可能会导致项目运行异常 
`, "install", "filter", "manager", "vant", "stringify", "6930240kxmHbb", "element-plus", "pnpm", "4602RvtSPS", "list", "子进程退出，退出码：", ", 项目依赖的版本为：", "find", "green", `
 依赖正在更新中, 请稍等... 
`, "1206XDKDVA", "peerDependencies", "red", "109576gJwrjB", "forEach", "table", "toString", "进程已退出 ⏏️", "65vNHhhx", `
 pluginPkg参数不能为空, 缺少插件依赖包，请检查插件依赖包是否存在！
`, "version"];
  return b = function() {
    return p;
  }, b();
}
async function z(p) {
  const x = u;
  console.log(f.red[x(353)](x(319)));
  let r = {};
  const i = [x(326), x(301), x(323)];
  function d(o) {
    const e = x, n = o.match(/\d+/g);
    return { versionString: (n == null ? void 0 : n[e(317)]("")) || "", versionBig: n && n.length ? n[0] : "" };
  }
  function w(o, e) {
    const n = x;
    let { versionString: s } = d(o), { versionString: t } = d(e);
    const c = Math[n(302)](s.length, t[n(354)]);
    return s.length < c && (s = s[n(299)](c, "0")), t[n(354)] < c && (t = t[n(299)](c, "0")), Number(t) > Number(s);
  }
  function j(o, e) {
    const { versionBig: n } = d(o), { versionBig: s } = d(e);
    return Number(s) > Number(n);
  }
  function C(o, e, n) {
    const s = x, t = [], c = [], l = { name: o, proVersion: e, version: r[s(336)][o] };
    w(e, r[s(336)][o]) && t[s(309)](l), j(e, r[s(336)][o]) && c.push(l), n && n({ smallConfig: t, bigConfig: c });
  }
  async function D(o, e, n, s, t) {
    const c = x;
    try {
      const l = await N.prompt(o);
      if ((l[c(355)] || [])[c(354)] > 0 || (l.bigVersion || []).length > 0) {
        const v = await N.prompt(e);
        if (v[c(322)] === "跳过") throw new Error(c(342));
        const B = n[c(346)]((a) => l.smallVersion[c(318)](a[c(303)]) ? a : null)[c(321)](Boolean), H = s.map((a) => l.bigVersion[c(318)](a[c(303)]) ? a : null).filter(Boolean), S = [...B, ...H];
        for (let a = 0; a < S[c(354)]; a++) {
          const I = S[a];
          r[c(336)][I[c(303)]] && (r.peerDependencies[I.name] = "" + I[c(350)]);
        }
        t && J.writeFile(t + c(297), JSON[c(324)](r, null, 2), (a) => {
          a ? console.error(a) : P(v.manager);
        });
      }
    } catch (l) {
      console[c(295)](l);
    }
  }
  function P(o) {
    const e = x;
    console[e(295)](f[e(333)][e(353)](e(334)));
    const n = M(o, [e(320)], {});
    n[e(300)].on(e(306), (s) => {
      const t = e;
      console[t(295)]("" + s[t(341)]());
    }), n.on(e(347), (s) => {
      const t = e;
      console[t(295)](t(330) + s), s === 0 ? console[t(295)](f[t(337)][t(353)](`
 安装成功, 重新执行 install 命令`)) : console.log(f[t(337)][t(353)](t(298)));
    });
  }
  const { pkg: O, include: A = i, mode: E = "development", dir: F, pluginPkg: V, exclude: h = [] } = p, k = [], m = [];
  if (!V) return console.log(f[x(337)][x(353)](x(344)));
  r = V || {};
  const y = (o) => {
    const e = x;
    return o[e(346)]((n) => ({ name: n[e(303)], version: n[e(345)], proVersion: n[e(350)], tip: e(310) + n[e(345)] + e(331) + n[e(350)] }));
  };
  h == null || h[x(339)]((o) => {
    const e = x;
    r.peerDependencies[o] && delete r[e(336)][o];
  });
  for (const [o, e] of Object.entries(O[x(304)]))
    A.includes(o) && C(o, e, ({ smallConfig: n, bigConfig: s }) => {
      const t = x;
      k[t(309)](...n), m[t(309)](...s);
    });
  const _ = y(k[x(321)]((o) => {
    const e = x;
    return m[e(354)] ? m[e(332)]((n) => o[e(303)] !== n[e(303)]) : o;
  }));
  _.length && (console[x(295)](f[x(316)][x(353)](x(308))), console[x(340)](_));
  const g = y(m);
  if (g.length && (console.log(f[x(337)][x(353)](x(352))), console[x(340)](g)), E === x(296)) {
    console[x(295)](f[x(337)][x(353)](x(313)));
    const o = _[x(354)] ? [{ type: "checkbox", choices: _.map((s) => s[x(303)]), name: "smallVersion", message: "请选择依赖进行小版本更新?" }] : [], e = g[x(354)] ? [{ type: x(349), choices: g[x(346)]((s) => s[x(303)]), name: "bigVersion", message: x(348) }] : [], n = [{ type: x(329), choices: [x(356), x(307), x(327), "跳过"], name: x(322), message: "请选择安装依赖的方式?" }];
    await D([...o, ...e], n, _, g, F);
  } else console[x(295)](f[x(337)][x(353)](`
 当前的环境为 生产环境，为保证项目的稳定运行, 线上不支持自动更新 
 `));
}
export {
  z as default
};
