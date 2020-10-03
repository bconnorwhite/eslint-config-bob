import { ESLintConfig } from "types-eslintrc";
import rules from "./rules";

const config: ESLintConfig = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  ignorePatterns: [
    "/build",
    "/coverage",
    "node_modules",
    "**/*.d.ts"
  ],
  overrides: [{
    files: ["*.js", "*.jsx"],
    rules: {
      "@typescript-eslint/no-var-requires": "off"
    }
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks"
  ],
  reportUnusedDisableDirectives: true,
  rules,
  settings: {
    react: {
      version: "detect"
    }
  }
}

export = {
  ...config
}
