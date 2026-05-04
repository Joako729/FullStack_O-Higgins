import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'ohiggins-ui/**/*.{js,jsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  // Esta sección soluciona el error de "Multiple copies of React"
  moduleNameMapper: {
    '^ohiggins-ui$': '<rootDir>/ohiggins-ui/index.js',
    '^react$': '<rootDir>/node_modules/react',
    '^react-dom$': '<rootDir>/node_modules/react-dom',
  },
}

export default createJestConfig(config)