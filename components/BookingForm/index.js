import { Component } from 'react'

import { clearKeys } from '../../lib'
import sendToBackend from './api'
import { Modal } from '../commons'
import Form from './Form'

class BookingForm extends Component {
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
    this.form.validateFields(e.currentTarget)
    this.setState({
      values: {
        ...this.state.values,
        [e.currentTarget.name]: e.currentTarget.value
      }
    })
    // When arriving at last field check validation on all of form
    // if valid enable the button for sending the data.
    // FIXME This is a really shitty check, "What if they do message first?"
    if (e.currentTarget.name === 'message') {
      this.form.validateFields() // Validate all fields on form
      this.setState({
        status: { ...this.state.status, disabled: !this.form.isValid() }
      })
    }
  }
  handleOnSubmit = async e => {
    try {
      e.preventDefault()
      // Validate all fields on form.
      this.form.validateFields()
      // Check if form is valid before sending data to API.
      if (this.form.isValid()) {
        // 1. SET LOADING STATE.
        this.setState({
          message: 'Sending your inquiry now!',
          status: {
            ...this.state.status,
            disabled: !this.form.isValid(),
            loading: true
          }
        })
        // 2. SEND REQUEST & AWAIT PROMISE
        const res = await sendToBackend(this.state)
        // 3. HANDLE API ERROR RESPONSE
        if (res.error) {
          // 3a. SET ERROR STATE
          this.setState({
            message: res.error,
            status: { ...this.state.status, error: true, loading: false },
            values: { ...clearKeys(this.state.values) }
          })
        }
        // 3b. SET SUCCESS STATE
        this.setState({
          message: res.message,
          status: { ...this.state.status, loading: false, success: true },
          values: { ...clearKeys(this.state.values) }
        })
      }
      // 4. FORM NOT VALID
      console.error('How in the hell did this happen?')
      return
    } catch (err) {
      // TODO
      // 1) Send to a service like Sentry to notify me when and why this failed.
      throw err
    }
  }
  renderModal = ({ error, loading, success }) => {
    // LOADING STATE
    if (loading) {
      return <Modal message={this.state.message} status={this.state.status} />
      // SUCCESS STATE
    } else if (success) {
      return <Modal message={this.state.message} status={this.state.status} />
      // ERROR STATE
    } else if (error) {
      return <Modal message={this.state.message} status={this.state.status} />
    }
    return
  }
  render() {
    const { disabled, error, loading, success } = this.state.status
    if (error || loading || success) {
      return this.renderModal(this.state.status)
    }
    return (
      <Form
        disabled={disabled}
        formRef={formWithConstraints => (this.form = formWithConstraints)}
        onChange={this.handleOnChange}
        onSubmit={this.handleOnSubmit}
        values={this.state.values}
      />
    )
  }
}

export default BookingForm
