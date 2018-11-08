/* eslint-disable */
const rewireEslint = require("react-app-rewire-eslint");
const { addBabelPlugin } = require("customize-cra");

function overrideEslintOptions(options) {
  // do stuff with the eslint options...
  return options;
}

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireEslint(config, env, overrideEslintOptions);
  config = addBabelPlugin("babel-plugin-styled-components")(config);
  return config;
};
