import { isAlpha, isAlphanumeric, isEmail, isMobilePhone } from 'validator'

const validate = ({ locale, messages }, values) => {
  // Use this to run validation checks against correct locale data!
  const lang = locale === 'ru' ? 'ru-RU' : 'en-US'
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
  } else if (!isAlphanumeric(values.message, [lang])) {
    errors.message = messages.formErrorMessagePattern
  }

  return errors
}

export default validate
