
/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: ["client/src/components/componentV/**/*.{js,jsx,ts,tsx}","!<rootDir>/node_modules/"],
  coverageThreshold: {
    "global": {
      "lines": 90,
      "statements": 90
    }},
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

};

module.exports = config;