const { eslint, tslint, deepmerge } = require('@ice/spec');

const commonRules = {
  'global-require': 0,
  'import/no-dynamic-require': 0,
  'react/jsx-filename-extension': 0,
  'react/no-find-dom-node': 0,
  'no-restricted-syntax': ['error', "BinaryExpression[operator='of']"],
};

const jsRules = deepmerge(eslint, {
  rules: {
    ...commonRules,
  },
});

const tsRules = deepmerge(tslint, {
  rules: {
    ...commonRules,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
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
