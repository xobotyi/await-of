module.exports = {
  root: true,
  extends: ['@xobotyi/eslint-config/base', '@xobotyi/eslint-config/typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prefer-rest-params': 'off',
    'no-restricted-syntax': ['error', 'FunctionExpression', 'WithStatement'],
    'no-param-reassign': 'off',
  },
  overrides: [
    {
      files: ['./benchmark/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
