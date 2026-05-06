const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  // Asegúrate de que apunte al archivo .ts que decidiste mantener
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'ohiggins-ui/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
}

module.exports = createJestConfig(customJestConfig)