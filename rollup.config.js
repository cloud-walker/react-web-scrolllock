import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

const babelConfig = babel({
  babelrc: false,
  presets: [['env', {modules: false}]],
  plugins: ['external-helpers', 'transform-class-properties'],
})

const external = ['react', 'ramda']

const input = 'source/ScrollLock.js'

export default [
  {
    input,
    external,
    output: {
      name: 'ScrollLock',
      file: pkg.browser,
      format: 'umd',
      globals: {react: 'React', ramda: 'R'},
    },
    plugins: [babelConfig, resolve(), commonjs()],
  },
  {
    input,
    external,
    output: [{file: pkg.main, format: 'cjs'}, {file: pkg.module, format: 'es'}],
    plugins: [babelConfig],
  },
]
