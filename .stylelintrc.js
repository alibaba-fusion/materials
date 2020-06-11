const { stylelint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(stylelint, {
  rules: {
    "block-no-empty": null,
    "font-family-no-missing-generic-family-keyword": null,
    "order/properties-order": null,
  }
});
