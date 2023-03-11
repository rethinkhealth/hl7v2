export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
  modulePaths: ["<rootdir>/src"],
  moduleDirectories: ["node_modules", "src"],
};
