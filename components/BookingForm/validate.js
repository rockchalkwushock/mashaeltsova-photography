import { messages } from '../../lib'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
// @see https://stackoverflow.com/a/13353676/6520579
const nameRegex = /^[A-Za-z\s]+$/
// @see https://stackoverflow.com/a/18029630/6520579
const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/

export const examplePhone = [
  '+1-234-567-8901',
  '+61-234-567-89-01',
  '+46-234 5678901',
  '+1 (234) 56 89 901',
  '+1 (234) 56-89 901',
  '+46.234.567.8901',
  '+1/234/567/8901'
]

export default (values, { intl }) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = intl.formatMessage(messages.errFirstNameReq)
  } else if (!nameRegex.test(values.firstName)) {
    errors.firstName = intl.formatMessage(messages.errFirstNameVal)
  } else if (values.firstName.length < 2) {
    errors.firstName = intl.formatMessage(messages.errFirstNameLen)
  }

  if (!values.lastName) {
    errors.lastName = intl.formatMessage(messages.errLastNameReq)
  } else if (!nameRegex.test(values.lastName)) {
    errors.lastName = intl.formatMessage(messages.errLastNameVal)
  } else if (values.lastName.length < 2) {
    errors.lastName = intl.formatMessage(messages.errLastNameLen)
  }

  if (!values.email) {
    errors.email = intl.formatMessage(messages.errEmailReq)
  } else if (!emailRegex.test(values.email)) {
    errors.email = intl.formatMessage(messages.errEmailVal)
  }

  if (!values.phone) {
    errors.phone = intl.formatMessage(messages.errPhoneReq)
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = intl.formatMessage(messages.errPhoneVal)
  }

  return errors
}
