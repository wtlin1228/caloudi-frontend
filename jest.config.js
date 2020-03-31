// ./client/jest.config.js
module.exports = {
  displayName: 'caloudi',
  testPathIgnorePatterns: ['/node_modules/', '/helpers/'],
  setupTestFrameworkScriptFile: require.resolve(
    './test/setup-test-framework.js'
  ),
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js')
  }
}
