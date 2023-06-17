module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "@react-native-community",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "no-console": "error",
    "unicorn/no-array-reduce": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
