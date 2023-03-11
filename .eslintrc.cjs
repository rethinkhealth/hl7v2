module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended",
    "plugin:typescript-sort-keys/recommended", // Enables sorting of object properties
  ],
  plugins: [
    "eslint-plugin-tsdoc",
    "yaml",
    "markdown",
    "import",
    "typescript-sort-keys",
  ],
  rules: {
    "tsdoc/syntax": "warn",
    // Importing rules
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          "builtin",
          "external",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          {
            group: "external",
            pattern: "@rethinkhealth/**",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};
