import { ESLintRules } from "types-eslintrc";

const rules: ESLintRules = {
  "@typescript-eslint/camelcase": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-empty-interface": ["error", {
    allowSingleExtends: true
  }],
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-unused-vars": ["warn", {
    argsIgnorePattern: "^_"
  }],
  "@typescript-eslint/no-use-before-define": ["error", {
    functions: false
  }],
  "@typescript-eslint/semi": "warn"
};

export default rules;
