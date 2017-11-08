import { Component } from 'react'
import PropTypes from 'prop-types'

import { Form, FormModal } from '../components'
import { sendDataToMicroService, validate } from '../lib'

class BookingForm extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
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
      throw err
    }
  }
  validateForm = ({ values }) => {
    // NOTE Pass this.props and deconstruct on other end
    // need both {messages} & locale string.
    const errors = validate(this.props, values)
    const isValid = !Object.keys(errors).some(key => errors[key])
    if (!isValid) {
      // NOTE Do this instead of ...this.state.formErrors ...errors
      // This is because the only thing spread will be whatever error is present in {errors}
      // Now valid fields will still present an error message and that is no bueno!
      this.setState({
        formErrors: {
          email: errors.email ? errors.email : '',
          firstName: errors.firstName ? errors.firstName : '',
          lastName: errors.lastName ? errors.lastName : '',
          message: errors.message ? errors.message : '',
          phone: errors.phone ? errors.phone : ''
        }
      })
      return isValid
    }
    return isValid
  }
  render() {
    const { error, loading, success } = this.state.status
    const { modalError, modalLoading, modalSuccess } = this.props.messages
    if (loading) return <FormModal msg={modalLoading} status="loading" />
    if (error) return <FormModal msg={modalError} status="error" />
    if (success) return <FormModal msg={modalSuccess} status="success" />
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
