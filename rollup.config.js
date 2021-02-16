import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
import path from 'path'

export default {
    input: "src/main.jsx",
    output: [{
        file: "dist/bundle.js",
        format: "esm",
        name: "WebdevStudy",
        plugins: [getBabelOutputPlugin({ configFile: path.resolve(__dirname, 'babel_output.config.json') })]
    }, {
        file: "dist/bundle.min.js",
        format: "esm",
        name: "WebdevStudy",
        plugins: [getBabelOutputPlugin({ configFile: path.resolve(__dirname, 'babel_output.config.json') }), terser()]
    }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' })
    ]
}