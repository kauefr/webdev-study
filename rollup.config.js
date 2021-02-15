import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'

export default {
    input: "src/main.js",
    output: [{
        file: "dist/bundle.js",
        format: "umd",
        name: "WebdevStudy"
    }, {
        file: "dist/bundle.min.js",
        format: "umd",
        name: "WebdevStudy",
        plugins: [terser()]
    }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' })
    ]
}