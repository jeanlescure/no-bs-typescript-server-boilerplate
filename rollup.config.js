import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";
import run from '@rollup/plugin-run';

const pkg = require('./package.json');

const isDevelopment = (
  process.env.ROLLUP_WATCH === 'true'
  || process.env.NODE_ENV === 'development'
);

const input = './server.ts';

const plugins = [
  typescript({
    check: isDevelopment,
    typescript: require('typescript'),
  }),
  nodeResolve(),
  commonjs({
    sourceMap: isDevelopment, // Only output sourcemaps on development
  }),
  json(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(
      isDevelopment ? 'development' : 'production'
    ),
  }),
];

if (!isDevelopment) {
  // terser is slow, only run when building
  plugins.push(terser());
}

if (isDevelopment) {
  plugins.push(run({
    execArgv: ['-r', 'dotenv/config', '-r', 'source-map-support/register', '--inspect'],
  }));
}

const config = {
  input,
  output: {
    file: 'dist/server.js',
    format: 'cjs',
    sourcemap: isDevelopment, // Only output sourcemaps on development
  },
  plugins,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [
    ...Object.keys(pkg.dependencies),
    // ...Object.keys(pkg.devDependencies),
  ],
};

if (isDevelopment) {
  config.watch = {
    chokidar: {
      paths: 'src/**',
      useFsEvents: false,
    }
  };
}

export default config;
