import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    // ESM build (not transpiled to ES5)
    input: './src/js/index.js',
    output: {
      file: './build/index.esm.js',
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
    // ES5 compatible builds
    input: './src/js/index.js',
    output: [
      { file: './build/index.cjs.js', format: 'cjs' }, // CommonJS build
      { file: './build/index.iife.js', format: 'iife' }, // Immediately Invoked Function Expression build (for script tag inclusion)
    ],
    treeshake: 'recommended', // Remove unused imports
    plugins: [
      nodeResolve(), // Locate imported node modules
      commonjs(), // Enable rollup to handle cjs modules
      babel({ exclude: 'node_modules/**', presets: ['@babel/preset-env'] }), // Transpile to ES5 for backwards compatibility
      terser({
        output: {
          comments: false,
        },
      }), // Minify output
    ],
  },
]
