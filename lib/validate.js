const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
// @see https://stackoverflow.com/a/13353676/6520579
const nameRegex = /^[A-Za-z\s]+$/
const messageRegex = /^[A-Za-z0-9.!?,;'\s]+$/
// @see https://stackoverflow.com/a/18029630/6520579
const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/

const validate = (messages, values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = messages.formErrorRequired
  } else if (!nameRegex.test(values.firstName)) {
    errors.firstName = `${values.firstName}: ${messages.formErrorNamePattern}`
  } else if (values.firstName.length < 2) {
    errors.firstName = messages.formErrorTooShort
  }

  if (!values.lastName) {
    errors.lastName = messages.formErrorRequired
  } else if (!nameRegex.test(values.lastName)) {
    errors.lastName = `${values.lastName}: ${messages.formErrorNamePattern}`
  } else if (values.lastName.length < 2) {
    errors.lastName = messages.formErrorTooShort
  }

  if (!values.email) {
    errors.email = messages.formErrorRequired
  } else if (!emailRegex.test(values.email)) {
    errors.email = `${values.email}: ${messages.formErrorEmailPattern}`
  }

  if (!values.phone) {
    errors.phone = messages.formErrorRequired
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = `${values.phone}: ${messages.formErrorPhonePattern}`
  }

  if (!values.message) {
    errors.message = messages.formErrorRequired
  } else if (values.message.length < 10) {
    errors.message = messages.formErrorTooShort
  } else if (values.message.length > 140) {
    errors.message = messages.formErrorTooLong
  } else if (!messageRegex.test(values.message)) {
    errors.message = messages.formErrorMessagePattern
  }

  return errors
}

export default validate
