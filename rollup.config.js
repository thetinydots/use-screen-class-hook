import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      sass({ insert: true }),
      typescript({
        clean: true,
        objectHashIgnoreUnknownHack: true,
        tsconfigOverride: {
          compilerOptions: { declaration: true },
        },
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/index.d.ts",
    output: [
      {
        file: "dist/main.d.ts",
        format: "es",
      },
    ],
    plugins: [dts()],
    external: ["react", "react-dom"],
  },
];
