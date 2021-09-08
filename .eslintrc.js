const { getESLintConfig, deepmerge } = require('@iceworks/spec');

const commonRules = {
  // 'global-require': 0,
  // 'import/no-dynamic-require': 0,
  // 'react/jsx-filename-extension': 0,
  // 'react/no-find-dom-node': 0,
  // 'no-restricted-syntax': ['error', "BinaryExpression[operator='of']"],
  // "react/self-closing-comp": 0,
  // "import/newline-after-import": 0
};

const jsRules = deepmerge(getESLintConfig('react'), {
  rules: {
    ...commonRules,
  },
});

const tsRules = deepmerge(getESLintConfig('react-ts'), {
  rules: {
    ...commonRules,
    // '@typescript-eslint/array-type': ['error'],
    // '@typescript-eslint/interface-name-prefix': 0,
    // '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/no-extra-semi': 0,
    // "@typescript-eslint/ban-types": 0,
    'react/no-unused-prop-types': 0,
  },
});

delete tsRules.root;

module.exports = {
  ...jsRules,
  overrides: [
    {
      ...tsRules,
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
};
