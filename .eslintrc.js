module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.json",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "google", "prettier"],
  plugins: ["prettier", "html"],
  rules: {
    semi: "off",
    "coma-dangle": "off",
    "require-jsdoc": "off",
    "prettier/prettier": "error",
  },
};
