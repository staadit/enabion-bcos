module.exports = {
  root: true,
  extends: ['next/core-web-vitals', '../../.eslintrc.base.cjs'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['warn', { allow: ['error'] }],
  },
};
