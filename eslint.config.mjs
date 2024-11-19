import tsParser from "@typescript-eslint/parser";
export default [
  {
    ignores: [
      ".nyc_output",
      "coverage",
      "lib",
      "node_modules",
      "**/node_modules",
      "tests/fixtures/**/*.json",
      "!playground/docs/.vuepress",
      "playground/docs/.vuepress/.temp",
      "playground/docs/.vuepress/.cache",
      "playground/docs/.vuepress/dist",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "no-warning-comments": "warn",
      "no-lonely-if": "off",
      "no-shadow": "off",
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "script",
    },
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    rules: {
      "n/file-extension-in-import": "off",
    },
  },
  {
    files: ["**/*.vue"],

    languageOptions: {
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-implicit-globals": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["scripts/**/*.ts", "tests/**/*.ts"],

    rules: {
      "no-console": "off",
      "@typescript-eslint/no-misused-promises": "off",
    },
  },
  {
    files: ["playground/**/*.js"],

    rules: {
      "n/no-missing-import": "off",
      "n/no-unpublished-import": "off",
      "n/no-missing-require": "off",
      "n/no-unpublished-require": "off",
    },
  },
];
