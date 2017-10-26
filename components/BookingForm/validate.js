const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
// @see https://stackoverflow.com/a/13353676/6520579
const nameRegex = /^[A-Za-z\s]+$/
const messageRegex = /^[A-Za-z0-9.!?,;\s]+$/
// @see https://stackoverflow.com/a/18029630/6520579
const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (!nameRegex.test(values.firstName)) {
    errors.firstName = 'Only alpha characters accepted'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Must be 2 or more characters'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (!nameRegex.test(values.lastName)) {
    errors.lastName = 'Only alpha characters accepted'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Must be 2 or more characters'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.phone) {
    errors.phone = 'Required'
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = 'Invalid phone format'
  }

  if (!values.message) {
    errors.message = 'Required'
  } else if (values.message.length < 10) {
    errors.message = 'Must be at least 10 characters long'
  } else if (values.message.length > 140) {
    errors.message = 'Must be no longer than 140 characters'
  } else if (!messageRegex.test(values.message)) {
    errors.message = 'Invalid message format'
  }

  return errors
}

export default validate
