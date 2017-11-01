import { Component } from 'react'
import PropTypes from 'prop-types'

import { Form } from '../components'
import { sendDataToMicroService } from '../lib'

class BookingForm extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired
  }
  state = {
    message: '',
    status: {
      disabled: true,
      error: false,
      loading: false,
      success: false
    },
    values: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phone: ''
    }
  }
  handleOnChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.currentTarget.name]: e.currentTarget.value
      }
    })
  }
  handleOnSubmit = async e => {
    // 1. prevent the reset by HTML
    e.preventDefault()
    try {
      // 3. SEND REQUEST & AWAIT PROMISE
      const res = await sendDataToMicroService(this.state)
      // 4. HANDLE API ERROR RESPONSE
      if (res.error) {
        // 4a. SET ERROR STATE
        this.setState({
          message: res.error,
          status: { ...this.state.status, error: true, loading: false },
          values: {
            email: '',
            firstName: '',
            lastName: '',
            message: '',
            phone: ''
          }
        })
      }
      // 4b. SET SUCCESS STATE
      this.setState({
        message: res.message,
        status: { ...this.state.status, loading: false, success: true },
        values: {
          email: '',
          firstName: '',
          lastName: '',
          message: '',
          phone: ''
        }
      })
    } catch (err) {
      // TODO: Send to a service that will tell me of failure like Sentry.
      throw err
    }
  }
  render() {
    return (
      <Form
        disabled={this.state.status.disabled}
        messages={this.props.messages}
        onChange={this.handleOnChange}
        onSubmit={this.handleOnSubmit}
        values={this.state.values}
      />
    )
  }
}

export default BookingForm
