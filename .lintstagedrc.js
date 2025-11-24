export default {
  // Run ultracite (biome) formatting on all staged files
  "*": (filenames) => [`pnpm ultracite format ${filenames.join(" ")}`],
  // Run syncpack when any package.json is modified (runs on all package.json files)
  "**/package.json": () => ["pnpm syncpack:fix"],
  "package.json": () => ["pnpm syncpack:fix"],
};
