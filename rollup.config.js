import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * Released under the ${pkg.license} License.
 */`;

const external = ["vue", "sortablejs"];

/** UMD 格式下的全局变量映射 */
const globals = {
  vue: "Vue",
  sortablejs: "Sortable",
};

/** 公共 Babel 插件配置 */
const babelPlugin = babel({
  babelHelpers: "bundled",
  exclude: "node_modules/**",
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 1%, last 2 versions, not dead, not ie <= 11",
        modules: false,
      },
    ],
  ],
});

/** 公共插件（不含 terser） */
const basePlugins = [
  resolve(),
  commonjs(),
  babelPlugin,
];

export default [
  {
    input: "src/index.js",
    external,
    plugins: [
      ...basePlugins,
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.warn"],
        },
        format: {
          comments: /^!/,
        },
      }),
    ],
    output: {
      file: pkg.main,
      format: "cjs",
      banner,
      exports: "auto",
    },
  },

  {
    input: "src/index.js",
    external,
    plugins: [
      ...basePlugins,
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.warn"],
        },
        format: {
          comments: /^!/,
        },
      }),
    ],
    output: {
      file: pkg.module,
      format: "esm",
      banner,
    },
  },

  {
    input: "src/index.js",
    external,
    plugins: basePlugins,
    output: {
      file: "dist/vue-draggable-multi.umd.js",
      format: "umd",
      name: "VueDraggable",
      globals,
      banner,
      exports: "auto",
    },
  },

  {
    input: "src/index.js",
    external,
    plugins: [
      ...basePlugins,
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.warn"],
        },
        format: {
          comments: /^!/,
        },
      }),
    ],
    output: {
      file: pkg.unpkg,
      format: "umd",
      name: "VueDraggable",
      globals,
      banner,
      exports: "auto",
    },
  },
];
