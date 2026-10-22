import { defineConfig } from "oxfmt";
import base from "ultracite/oxfmt";

export default defineConfig({
  ...base,
  // Skills installed by `npx skills` stay byte-identical to the hash in skills-lock.json.
  ignorePatterns: [
    ...(base.ignorePatterns ?? []),
    "**/*.hbs",
    ".agents/skills/gh-stack/**",
    ".claude/skills/security-audit/**",
  ],
  jsdoc: {
    commentLineStrategy: "keep",
    lineWrappingStyle: "balance",
  },
});
