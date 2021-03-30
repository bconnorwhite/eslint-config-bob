import { ESLintConfig } from "types-eslintrc";
import rules, { typescriptRules, reactRules } from "./rules";

const config: ESLintConfig = {
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: [
    "/build",
    "/coverage",
    "node_modules"
  ],
  overrides: [{
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    extends: [
      "eslint:recommended"
    ],
    rules
  }, {
    files: ["*.ts", "*.tsx"],
    extends: [
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
      "@typescript-eslint"
    ],
    rules: typescriptRules
  }, {
    files: ["*.tsx", "*.jsx"],
    extends: [
      "plugin:react/recommended"
    ],
    plugins: [
      "react-hooks"
    ],
    rules: reactRules,
    settings: {
      react: {
        version: "detect"
      }
    }
  }, {
    files: ["*.json"],
    extends: [
      "plugin:json/recommended"
    ]
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  reportUnusedDisableDirectives: true
};

export = {
  ...config
};
