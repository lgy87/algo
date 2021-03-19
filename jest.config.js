export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["node_modules", "src/test", "src/types"],
  reporters: ["default"],
  globals: { "ts-jest": { diagnostics: false } },
  transform: {},
}
