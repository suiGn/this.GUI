// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  // ... other configurations
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
};