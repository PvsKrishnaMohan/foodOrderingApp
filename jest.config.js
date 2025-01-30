module.exports = {
    testEnvironment: 'jsdom', // Simulates a browser-like environment
    setupFilesAfterEnv: ['./setupTests.js', '@testing-library/jest-dom/extend-expect'], // For custom matchers
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest', // Transpiles JS/TS files
    },
};
