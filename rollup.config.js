const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const replace = require('@rollup/plugin-replace');

module.exports = {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
  watch: {
    skipWrite: false,
    clearScreen: false,
    include: 'src/**/*',
  },
  plugins: [
    serve('public'),
    livereload({
      watch: 'public',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    nodeResolve(),
    json(),
    commonjs(),
  ],
};
