/* eslint-disable no-param-reassign, no-prototype-builtins, no-console */
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const glob = require('glob')

const defaultMessages = glob
  .sync('./lib/i18n/.messages/**/*.json')
  .map(filename => readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((messages, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (messages.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`)
      }
      messages[id] = defaultMessage
    })
    return messages
  }, {})

writeFileSync('./lib/i18n/en.json', JSON.stringify(defaultMessages, null, 2))
console.log(`> Wrote default messages to: "${resolve('./lib/i18n/en.json')}"`)
