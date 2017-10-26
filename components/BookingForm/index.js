import { Component } from 'react'

import sendToBackend from './api'
import validate from './validate'

import { Button, Form, Input, TextArea } from './commons'

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
        const res = await sendToBackend(this.state)
        // TODO
        // 1. Clear Form Data with `this.setState()`
        // 2. Handle transition/animation of view.
        if (res.error) {
          this.setState(state => ({ ...state, error: res.error }))
        }
        this.setState(state => ({ ...state, success: res.message }))
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
      <Form onSubmit={this.handleSubmit}>
        <Input
          autoComplete="given-name"
          label="First Name"
          name="firstName"
          onChange={this.handleChange}
          type="text"
          value={firstName}
        />
        <Input
          autoComplete="family-name"
          label="Last Name"
          name="lastName"
          onChange={this.handleChange}
          type="text"
          value={lastName}
        />
        <Input
          autoComplete="email"
          label="Email"
          name="email"
          onChange={this.handleChange}
          type="email"
          value={email}
        />
        <Input
          autoComplete="tel"
          label="Phone"
          name="phone"
          onChange={this.handleChange}
          type="tel"
          value={phone}
        />
        <TextArea
          autoComplete="off"
          cols="22"
          label="What are your booking needs?"
          name="message"
          onChange={this.handleChange}
          rows="5"
          value={message}
        />
        <Button valid={!isEnabled}>Book Now!</Button>
      </Form>
    )
  }
}

export default BookingForm
