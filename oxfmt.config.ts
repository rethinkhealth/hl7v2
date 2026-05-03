import { defineConfig } from "oxfmt";
import base from "ultracite/oxfmt";

export default defineConfig({
  ...base,
  ignorePatterns: [...(base.ignorePatterns ?? []), "**/*.hbs"],
  jsdoc: {
    commentLineStrategy: "keep",
    lineWrappingStyle: "balance",
  },
});
