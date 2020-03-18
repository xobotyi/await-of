import ts from 'rollup-plugin-typescript2';
import pkg from './package.json';

module.exports = {
  input: './src/index.ts',

  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],

  plugins: [
    ts({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          target: 'es5',
          declaration: true,
        },
      },
    }),
  ],
};
