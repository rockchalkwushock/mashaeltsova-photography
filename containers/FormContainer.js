import { Component } from 'react'
import PropTypes from 'prop-types'

import { Form, Modal } from '../components'
import { sendDataToMicroService, validate } from '../lib'

class BookingForm extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired
  }
  state = {
    formErrors: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phone: ''
    },
    message: '',
    status: {
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
    // 1. Validate Form
    if (!this.validateForm(this.state)) {
      e.preventDefault()
      return
    }
    // 2. prevent the reset by HTML
    e.preventDefault()
    this.setState({
      status: {
        ...this.state.status,
        loading: true
      }
    })
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
  validateForm = ({ values }) => {
    const errors = validate(this.props.messages, values)
    const isValid = !Object.keys(errors).some(key => errors[key])
    if (!isValid) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          ...errors
        }
      })
      return isValid
    }
    return isValid
  }
  render() {
    const { error, loading, success } = this.state.status
    const { modalError, modalLoading, modalSuccess } = this.props.messages
    if (loading) return <Modal msg={modalLoading} status="loading" />
    if (error) return <Modal msg={modalError} status="error" />
    if (success) return <Modal msg={modalSuccess} status="success" />
    return (
      <Form
        errors={this.state.formErrors}
        messages={this.props.messages}
        onChange={this.handleOnChange}
        onSubmit={this.handleOnSubmit}
        values={this.state.values}
      />
    )
  }
}

export default BookingForm
