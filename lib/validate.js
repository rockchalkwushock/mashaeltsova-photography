/* NOTE: Import like this to reduce weight of validator in bundle! */
import isAlpha from 'validator/lib/isAlpha'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'
import matches from 'validator/lib/matches'

const enRegex = /^[0-9A-Z.!?,;'\s]+$/i
const ruRegex = /^[0-9А-ЯЁ.!?,;'\s]+$/i

const validate = ({ locale, messages }, values) => {
  // NOTE: Use this to run validation checks against correct locale data!
  const lang = locale === 'ru' ? 'ru-RU' : 'en-US'
  const regex = locale === 'ru' ? ruRegex : enRegex
  const errors = {}
  if (!values.firstName) {
    errors.firstName = messages.formErrorRequired
  } else if (!isAlpha(values.firstName, [lang])) {
    errors.firstName = `${values.firstName}: ${messages.formErrorNamePattern}`
  } else if (values.firstName.length < 2) {
    errors.firstName = messages.formErrorTooShort
  }

  if (!values.lastName) {
    errors.lastName = messages.formErrorRequired
  } else if (!isAlpha(values.lastName, [lang])) {
    errors.lastName = `${values.lastName}: ${messages.formErrorNamePattern}`
  } else if (values.lastName.length < 2) {
    errors.lastName = messages.formErrorTooShort
  }

  if (!values.email) {
    errors.email = messages.formErrorRequired
  } else if (!isEmail(values.email)) {
    errors.email = `${values.email}: ${messages.formErrorEmailPattern}`
  }

  if (!values.phone) {
    errors.phone = messages.formErrorRequired
  } else if (!isMobilePhone(values.phone, [lang])) {
    errors.phone = `${values.phone}: ${messages.formErrorPhonePattern}`
  }

  if (!values.message) {
    errors.message = messages.formErrorRequired
  } else if (values.message.length < 10) {
    errors.message = messages.formErrorTooShort
  } else if (values.message.length > 140) {
    errors.message = messages.formErrorTooLong
  } else if (!matches(values.message, regex)) {
    errors.message = messages.formErrorMessagePattern
  }

  return errors
}

export default validate
