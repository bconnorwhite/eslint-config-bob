/* eslint-disable max-lines */
import { ESLintRules } from "types-eslintrc";
import typescriptRules from "./typescript";
import reactRules from "./react";

export {
  typescriptRules,
  reactRules
}

const rules: ESLintRules = {
  "no-await-in-loop": "warn",
  "no-console": ["error", { allow: ["warn", "error", "info"] }],
  "no-extra-parens": "off",
  "no-template-curly-in-string": "off",
  "require-atomic-updates": "error",
  "accessor-pairs": "error",
  "array-callback-return": "warn",
  "block-scoped-var": "error",
  "class-methods-use-this": "warn",
  "complexity": "off",
  "consistent-return": "error",
  "curly": ["warn", "all"],
  "default-case": "error",
  "default-param-last": "off",
  "dot-location": ["warn", "property"],
  "dot-notation": "warn",
  "eqeqeq": ["warn", "always"],
  "grouped-accessor-pairs": "error",
  "guard-for-in": "error",
  "max-classes-per-file": "error",
  "no-alert": "error",
  "no-caller": "error",
  "no-constructor-return": "error",
  "no-div-regex": "error",
  "no-else-return": "off",
  "no-empty-function": "off",
  "no-eq-null": "error",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "warn",
  "no-extra-label": "error",
  "no-floating-decimal": "error",
  "no-implicit-coercion": "warn",
  "no-implicit-globals": "warn",
  "no-implied-eval": "error",
  "no-invalid-this": "error",
  "no-iterator": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-loop-func": "error",
  "no-magic-numbers": "off",
  "no-multi-spaces": "error",
  "no-multi-str": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-octal-escape": "error",
  "no-param-reassign": "error",
  "no-proto": "error",
  "no-restricted-properties": "error",
  "no-return-assign": "error",
  "no-return-await": "error",
  "no-script-url": "error",
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-throw-literal": "error",
  "no-unmodified-loop-condition": "error",
  "no-unused-expressions": "error",
  "no-useless-call": "error",
  "no-useless-concat": "error",
  "no-useless-return": "error",
  "no-void": "error",
  "no-warning-comments": "warn",
  "prefer-named-capture-group": "off",
  "prefer-promise-reject-errors": "error",
  "prefer-regex-literals": "error",
  "radix": ["error", "as-needed"],
  "require-await": "off",
  "require-unicode-regexp": "off",
  "vars-on-top": "error",
  "wrap-iife": "error",
  "yoda": "error",
  "strict": ["error", "never"],
  "init-declarations": "off",
  "no-label-var": "error",
  "no-restricted-globals": "error",
  "no-shadow": "warn",
  "no-undef-init": "error",
  "no-undefined": "off",
  "no-use-before-define": "off",
  "callback-return": "error",
  "global-require": "error",
  "handle-callback-err": "off",
  "no-buffer-constructor": "error",
  "no-mixed-requires": "error",
  "no-new-require": "error",
  "no-path-concat": "error",
  "no-process-env": "off",
  "no-process-exit": "error",
  "no-restricted-modules": "error",
  "no-sync": "warn",
  "array-bracket-newline": "off",
  "array-bracket-spacing": "error",
  "array-element-newline": "off",
  "block-spacing": "error",
  "brace-style": "error",
  "camelcase": "off",
  "capitalized-comments": "off",
  "comma-dangle": ["error", "never"],
  "comma-spacing": "error",
  "comma-style": "error",
  "computed-property-spacing": "error",
  "consistent-this": "error",
  "eol-last": "error",
  "func-call-spacing": "error",
  "func-name-matching": "error",
  "func-names": "error",
  "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
  "function-call-argument-newline": ["warn", "consistent"],
  "function-paren-newline": ["error", "multiline-arguments"],
  "id-blacklist": "error",
  "id-length": "off",
  "id-match": "error",
  "implicit-arrow-linebreak": "error",
  "indent": ["error", 2],
  "jsx-quotes": "error",
  "key-spacing": "error",
  "keyword-spacing": [
    "error",
    {
      overrides: {
        if: {
          after: false
        },
        for: {
          after: false
        },
        while: {
          after: false
        },
        catch: {
          after: false
        },
        throw: {
          after: false
        }
      }
    }
  ],
  "line-comment-position": "off",
  "linebreak-style": "error",
  "lines-around-comment": "off",
  "lines-between-class-members": ["warn", "never"],
  "max-depth": "error",
  "max-len": ["warn", { code: 180 }],
  "max-lines": ["warn", 200],
  "max-lines-per-function": "off",
  "max-nested-callbacks": "warn",
  "max-params": ["warn", 4],
  "max-statements": "off",
  "max-statements-per-line": "error",
  "multiline-comment-style": "off",
  "multiline-ternary": "off",
  "new-cap": "off",
  "new-parens": "error",
  "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
  "no-array-constructor": "error",
  "no-bitwise": "error",
  "no-continue": "error",
  "no-inline-comments": "off",
  "no-lonely-if": "error",
  "no-mixed-operators": "error",
  "no-multi-assign": "error",
  "no-multiple-empty-lines": "warn",
  "no-negated-condition": "off",
  "no-nested-ternary": "off",
  "no-new-object": "error",
  "no-plusplus": "error",
  "no-restricted-syntax": "error",
  "no-tabs": "error",
  "no-ternary": "off",
  "no-trailing-spaces": [
    "warn", {
      ignoreComments: true // Set to `true` to support two trailing spaces to wrap TypeScript comments.
    }
  ],
  "no-underscore-dangle": "warn",
  "no-unneeded-ternary": "error",
  "no-whitespace-before-property": "error",
  "nonblock-statement-body-position": "error",
  "object-curly-newline": "error",
  "object-curly-spacing": ["warn", "always"],
  "object-property-newline": "off",
  "one-var": ["warn", "never"],
  "one-var-declaration-per-line": "error",
  "operator-assignment": "error",
  "operator-linebreak": ["error", "after"],
  "padded-blocks": ["warn", "never"],
  "padding-line-between-statements": "error",
  "prefer-exponentiation-operator": "error",
  "prefer-object-spread": "error",
  "quote-props": ["warn", "consistent-as-needed"],
  "quotes": ["warn", "double", { avoidEscape: true }],
  "semi": "off",
  "semi-spacing": "error",
  "semi-style": "error",
  "sort-keys": "off",
  "sort-vars": "error",
  "space-before-blocks": "error",
  "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],
  "space-in-parens": "error",
  "space-infix-ops": "off",
  "space-unary-ops": "error",
  "spaced-comment": "warn",
  "switch-colon-spacing": "error",
  "template-tag-spacing": "error",
  "unicode-bom": "error",
  "wrap-regex": "error",
  "arrow-body-style": "off",
  "arrow-parens": "error",
  "arrow-spacing": "error",
  "generator-star-spacing": "error",
  "no-confusing-arrow": "error",
  "no-duplicate-imports": "error",
  "no-useless-computed-key": "error",
  "no-useless-constructor": "error",
  "no-useless-rename": "error",
  "no-var": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "prefer-destructuring": ["error", {
    VariableDeclarator: {
      array: false,
      object: true
    },
    AssignmentExpression: {
      array: false,
      object: true
    }
  }, {
    enforceForRenamedProperties: false
  }],
  "prefer-numeric-literals": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "rest-spread-spacing": "error",
  "sort-imports": "off",
  "symbol-description": "error",
  "template-curly-spacing": "error",
  "yield-star-spacing": "error"
}

export default rules;
