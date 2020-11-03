const { getStylelintConfig, deepmerge } = require('@iceworks/spec');

module.exports = deepmerge(getStylelintConfig('react'), {
  rules: {
    // "block-no-empty": null,
    // "font-family-no-missing-generic-family-keyword": null,
    // "order/properties-order": null,
  }
});
