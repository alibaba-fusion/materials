const { getStylelintConfig } = require('@iceworks/spec');

module.exports = getStylelintConfig('react', {
  rules: {
    "max-line-length": null,
    "block-no-empty": null,
    "font-family-no-missing-generic-family-keyword": null
  }
});
