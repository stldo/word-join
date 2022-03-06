import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json'

const name = 'wordJoin'

export default [{
  input: 'src/index.ts',
  output: [{
    format: 'esm',
    file: packageJson.module
  }],
  plugins: [
    typescript()
  ]
}, {
  input: 'src/index.ts',
  output: [{
    format: 'umd',
    file: packageJson.main,
    name
  }],
  plugins: [
    typescript()
  ]
}, {
  input: 'src/index.ts',
  output: [{
    format: 'umd',
    file: packageJson.main.replace(/\.js$/, '.min.js'),
    name
  }],
  plugins: [
    typescript(),
    terser()
  ]
}]
