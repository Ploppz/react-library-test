import { babel } from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const pkg = require("./package.json");

export default [
    {
        input: "src/index.js",
        output: [
            {
                name: "listree",
                file: pkg.browser,
                format: "umd",
            },
            {
                file: pkg.module,
                format: "es",
            },
        ],
        plugins: [
            resolve(),
            babel({ 
                exclude: 'node_modules/**',
                presets: ['@babel/env', '@babel/preset-react']
            }),
            commonjs()
        ],
    },
];
