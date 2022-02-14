import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    // ESM production build
    input: './src/js/index.js',
    output: {
      file: './build/index.js',
      format: 'es',
    },
    treeshake: 'recommended', // Remove unused imports
    plugins: [
      nodeResolve(), // Locate imported node modules
      commonjs(), // Enable rollup to handle cjs modules
      terser({
        output: {
          comments: false,
        },
      }), // Minify output
    ],
  },
  {
    // IIFE (Immediately Invoked Function Expression) production build
    // ES5 compatible to be used as fallback <script> where backwards compatibility is needed (e.g. IE11)
    input: './src/js/index.js',
    output: {
      file: './build/index.iife.js',
      format: 'iife',
    },
    treeshake: 'recommended', // Remove unused imports
    plugins: [
      nodeResolve(), // Locate imported node modules
      commonjs(), // Enable rollup to handle cjs modules
      babel({ exclude: 'node_modules/**', presets: ['@babel/preset-env'] }), // Transpile to ES5
      terser({
        output: {
          comments: false,
        },
      }), // Minify output
    ],
  },
]
