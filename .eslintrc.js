module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["airbnb", "plugin:vue/essential", "@vue/eslint-config-airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
