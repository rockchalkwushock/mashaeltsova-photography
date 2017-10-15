/**
 * Many thanks to @stipsan
 * @see https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262
 */

const Intl = require.requireActual('react-intl')

// Initialize the real provider so that we don't
// need to re-implement any internals
const defaultProps = {
  locale: 'en',
  defaultLocale: 'en'
}
const intlProvider = new Intl.IntlProvider(defaultProps, {})

// The exact same `intl` object the real code receives ;-)
const { intl } = intlProvider.getChildContext()
Intl.injectIntl = Node => props => <Node {...props} intl={intl} />

// Override components by implementing the real components
//  providing them the context they need in order to function
const {
  IntlProvider,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
  FormattedMessage,
  FormattedHTMLMessage
} = Intl
Intl.FormattedDate = props => (
  <IntlProvider {...defaultProps}>
    <FormattedDate {...props} />
  </IntlProvider>
)
Intl.FormattedTime = props => (
  <IntlProvider {...defaultProps}>
    <FormattedTime {...props} />
  </IntlProvider>
)
Intl.FormattedRelative = props => (
  <IntlProvider {...defaultProps}>
    <FormattedRelative {...props} />
  </IntlProvider>
)
Intl.FormattedNumber = props => (
  <IntlProvider {...defaultProps}>
    <FormattedNumber {...props} />
  </IntlProvider>
)
Intl.FormattedPlural = props => (
  <IntlProvider {...defaultProps}>
    <FormattedPlural {...props} />
  </IntlProvider>
)
Intl.FormattedMessage = props => (
  <IntlProvider {...defaultProps}>
    <FormattedMessage {...props} />
  </IntlProvider>
)
Intl.FormattedHTMLMessage = props => (
  <IntlProvider {...defaultProps}>
    <FormattedHTMLMessage {...props} />
  </IntlProvider>
)

// Set displayName so that snapshots don't use "Unknown" as component name
Intl.FormattedDate.displayName = 'FormattedDate'
Intl.FormattedTime.displayName = 'FormattedTime'
Intl.FormattedRelative.displayName = 'FormattedRelative'
Intl.FormattedNumber.displayName = 'FormattedNumber'
Intl.FormattedPlural.displayName = 'FormattedPlural'
Intl.FormattedMessage.displayName = 'FormattedMessage'
Intl.FormattedHTMLMessage.displayName = 'FormattedHTMLMessage'

// Special hook for tests, real package does not export this
Intl.intl = intl

module.exports = Intl
