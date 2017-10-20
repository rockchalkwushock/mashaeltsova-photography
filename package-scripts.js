const npsUtils = require('nps-utils')

const { crossEnv, rimraf, series } = npsUtils

module.exports = {
  scripts: {
    analyze: `${crossEnv('ANALYZE=1')} next build`,
    clean: series(
      rimraf('coverage'),
      rimraf('.next'),
      rimraf('./lib/i18n/.messages')
    ),
    commit: 'git cz',
    lint: {
      default:
        'eslint __mocks__ __tests__ components containers lib pages scripts ./server.js',
      fix: series.nps('lint --fix')
    },
    reportCoverage: 'codecov',
    test: {
      default: 'jest --runInBand --updateSnapshot',
      config: series.nps('test --showConfig'),
      coverage: series.nps('test --coverage'),
      watch: series.nps('test --watch')
    },
    validate: {
      withCoverage: series.nps('lint', 'test.coverage')
    }
  }
}
