module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: ["ts", "js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.(ts|js)$": "babel-jest",
  },
  testMatch: ["**/tests/**/*.spec.ts"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@vue/test-utils$":
      "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
    "\\.(css|less|scss)$": "<rootDir>/tests/styleMock.ts",
  },
};
