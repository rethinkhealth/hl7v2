export default {
  // Run ultracite (biome) formatting on all staged files
  "*": ["pnpm format"],
  // Run syncpack when any package.json is modified (runs on all package.json files)
  "**/package.json": () => ["pnpm syncpack:fix"],
};
