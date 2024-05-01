import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import filesize from "rollup-plugin-filesize";

export default [
  {
    input: "public/js/faq.js",
    output: {
      file: "public/dist/faq.min.js",
      format: "cjs",
    },
    plugins: [terser()],
  },
  {
    input: "public/styles/home.css",
    output: {
      file: "public/dist/home.min.css",
      format: "cjs",
    },
    plugins: [
      postcss({
        plugins: [cssnano()],
        extract: true,
        minimize: true,
        sourceMap: false,
        extensions: [".css"],
      }),
      filesize(),
    ],
  },
  {
    input: "public/styles/slugpages.css",
    output: {
      file: "public/dist/slugpages.min.css",
      format: "cjs",
    },
    plugins: [
      postcss({
        plugins: [cssnano()],
        extract: true,
        minimize: true,
        sourceMap: false,
        extensions: [".css"],
      }),
      filesize(),
    ],
  },
];
