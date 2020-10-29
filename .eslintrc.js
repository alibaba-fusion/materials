const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    'max-len': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@iceworks/best-practices/no-secret-info': 'off',
    '@iceworks/best-practices/recommend-polyfill': 'off',
    '@iceworks/best-practices/no-js-in-ts-project': 'off'
  }
});
