module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    //"eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-strongly-recommended",
    //"plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": ["error", { code: 120, tabWidth: 2, ignoreUrls: true }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off"
  },
};
