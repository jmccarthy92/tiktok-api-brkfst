module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-parameter-properties": 0,
  },
  overrides: [
    {
      files: ["*.spec.ts"],
      rules: { "@typescript-eslint/explicit-function-return-type": "off" },
    },
  ],
};
