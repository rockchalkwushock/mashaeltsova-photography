import { Component } from 'react'
import axios from 'axios'

axios.defaults.baseURL = process.env.BACKEND_URL

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

class BookingForm extends Component {
  state = {
    error: null,
    success: null,
    values: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phone: ''
    }
  }
  handleChange = e => {
    // NOTE: `setState` does NOT by default merge deeply nested objects
    // You MUST spread the other values in the nested object.
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    })
  }
  handleSubmit = async e => {
    try {
      if (this.validatedForm()) {
        e.preventDefault()
        const { data } = await axios.post('/mail', this.state.values)
        // TODO
        // 1. Clear Form Data with `this.setState()`
        // 2. Handle transition/animation of view.
        if (data.error) {
          this.setState(state => ({ ...state, error: data.error }))
        }
        this.setState(state => ({ ...state, success: data.message }))
      }
    } catch (err) {
      console.error(err)
      // TODO: Log out to a service that will notify me
      // of the failing form!
      throw err
    }
  }
  validatedForm = () => {
    const errors = validate(this.state.values)
    // Will evaluate to false when errors = {}
    return !Object.keys(errors).some(x => errors[x])
  }
  render() {
    const { email, firstName, lastName, message, phone } = this.state.values
    const isEnabled = this.validatedForm()
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            autoComplete="given-name"
            name="firstName"
            onChange={this.handleChange}
            type="text"
            value={firstName}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            autoComplete="family-name"
            name="lastName"
            onChange={this.handleChange}
            type="text"
            value={lastName}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="email"
            name="email"
            onChange={this.handleChange}
            type="email"
            value={email}
          />
        </div>
        <div className="input-field">
          <label htmlFor="phone">Phone</label>
          <input
            autoComplete="tel"
            name="phone"
            onChange={this.handleChange}
            type="tel"
            value={phone}
          />
        </div>
        <div className="input-field">
          <label htmlFor="message">Message</label>
          <textarea
            autoComplete="off"
            cols="22"
            name="message"
            onChange={this.handleChange}
            rows="5"
            value={message}
          />
        </div>
        <div className="submitButton">
          <button disabled={!isEnabled} type="submit">
            Book Now!
          </button>
        </div>
      </form>
    )
  }
}

export default BookingForm
