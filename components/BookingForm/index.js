/* eslint-disable no-return-assign, no-param-reassign */
import { Component } from 'react'
import {
  FormWithConstraints,
  FieldFeedback,
  FieldFeedbacks
} from 'react-form-with-constraints'

import { styles } from '../../lib'
import sendToBackend from './api'

// Function for clearing all fields on this.state.values
const fn = values => {
  Object.keys(values).forEach(key => (values[key] = ''))
}

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
      this.form.validateFields() // Validate all fields on form
      this.setState({
        status: {
          ...this.state.status,
          disabled: !this.form.isValid(),
          loading: true
        }
      })
      if (this.form.isValid()) {
        const res = await sendToBackend(this.state)
        if (res.error) {
          this.setState({
            message: res.error,
            status: { ...this.state.status, error: true, loading: false },
            values: { ...fn(this.state.values) }
          })
        }
        this.setState({
          message: res.message,
          status: { ...this.state.status, loading: false, success: true },
          values: { ...fn(this.state.values) }
        })
      }
    } catch (err) {
      // TODO
      // 1) Send to a service like Sentry to notify me when and why this failed.
      throw err
    }
  }
  renderErrorModal = () => <h1>{this.state.message}</h1>
  renderLoader = () => <h1>Loading</h1>
  renderSuccessModal = () => <h1>{this.state.message}</h1>
  render() {
    const { disabled, error, loading, success } = this.state.status
    if (loading) {
      return this.renderLoader()
    } else if (success) {
      return this.renderSuccessModal()
    } else if (error) {
      return this.renderErrorModal()
    }
    return (
      <FormWithConstraints
        ref={formWithConstraints => (this.form = formWithConstraints)}
        onSubmit={this.handleOnSubmit}
        noValidate
      >
        {/* FIRST NAME */}
        <div className="field">
          <input
            type="text"
            name="firstName"
            value={this.state.values.firstName}
            onChange={this.handleOnChange}
            required
            minLength={3}
          />
          <label htmlFor="firstName">First Name</label>
          <FieldFeedbacks for="firstName">
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="tooShort"
            >
              Too short
            </FieldFeedback>
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="*"
            />
          </FieldFeedbacks>
        </div>
        {/* LAST NAME */}
        <div className="field">
          <input
            type="text"
            name="lastName"
            value={this.state.values.lastName}
            onChange={this.handleOnChange}
            required
            minLength={3}
          />
          <label htmlFor="lastName">Last Name</label>
          <FieldFeedbacks for="lastName">
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="tooShort"
            >
              Too short
            </FieldFeedback>
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="*"
            />
          </FieldFeedbacks>
        </div>
        {/* EMAIL */}
        <div className="field">
          <input
            type="email"
            name="email"
            value={this.state.values.email}
            onChange={this.handleOnChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            required
          />
          <label htmlFor="email">Email</label>
          <FieldFeedbacks for="email">
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="*"
            />
          </FieldFeedbacks>
        </div>
        {/* PHONE */}
        <div className="field">
          <input
            type="tel"
            name="phone"
            value={this.state.values.phone}
            onChange={this.handleOnChange}
            pattern="\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$"
            required
          />
          <label htmlFor="phone">Phone</label>
          <FieldFeedbacks for="phone">
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="patternMismatch"
            >
              Should be match one of the following: +1-234-567-8901,
              +61-234-567-89-01 +46-234 5678901
            </FieldFeedback>
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="*"
            />
          </FieldFeedbacks>
        </div>
        {/* MESSAGE */}
        <div className="field">
          <textarea
            name="message"
            value={this.state.values.message}
            onChange={this.handleOnChange}
            pattern="[A-Za-z0-9.!?,;'\s]+$"
            required
            minLength={10}
            maxLength={140}
          />
          <label htmlFor="message">Short Message</label>
          <FieldFeedbacks for="message">
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="tooShort"
            >
              Too short
            </FieldFeedback>
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="tooLong"
            >
              Too long
            </FieldFeedback>
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="patternMismatch"
            >
              May only contain upper & lower case letters, numbers, and .!?,;'
            </FieldFeedback>
            <FieldFeedback
              style={{ color: 'red', position: 'absolute', top: '10px' }}
              when="*"
            />
          </FieldFeedbacks>
        </div>
        {/* BUTTON */}
        <div className="field">
          <button disabled={disabled}>Book Now!</button>
        </div>
        <style jsx>{`
            form {
              display: grid;
              grid-row-gap: 0.5em;
              grid-template-columns: repeat(6, 1fr);
              padding: 1em;
            }
            form > * {
              grid-columns: span 6;
            }
            div.field {
              height: 60px;
              line-height: 44px;
              position: relative;
              text-align: left;
            }
            label {
              position: absolute;
              text-align: left;
              top: -12px;
              transition: 0.2s all;
              width: 100%;
            }
            input {
              background-color: transparent;
              background-repeat: no-repeat;
              border: 0;
              border-bottom: 2px solid ${styles.colors.warm};
              color: ${styles.colors.warm};
              font-size: 1em;
              outline: 0;
              padding: 0em 0.5em;
              position: absolute;
              width: 100%;
              z-index: 1;
            }
            input:focus ~ label {
              top: -35px;
            }
            textarea {
              background-color: transparent;
              background-repeat: no-repeat;
              border: 0;
              border-bottom: 2px solid ${styles.colors.warm};
              color: ${styles.colors.warm};
              font-size: 1em;
              outline: 0;
              overflow: auto;
              padding: 0em 0.5em;
              position: absolute;
              resize: none;
              text-align: left;
              width: 100%;
              z-index: 1;
            }
            textarea:focus ~ label {
              top: -35px;
            }
            textarea:focus {
              height: 60px;
            }
            button {
              background-color: ${styles.colors.warm};
              border: 1px solid ${styles.colors.peach};
              border-radius: 10px;
              box-shadow: 2px 2px 2px 1px rgba(254, 220, 210, 0.5);
              color: ${styles.colors.peach};
              font-family: ${styles.fonts.nunito};
              font-size: 1.25em;
              grid-column: span 6;
              padding: 0.5em;
              text-align: center;
              width: 100%;
            }
            button:hover {
              background-color: ${styles.colors.peach};
              border: 1px solid ${styles.colors.warm};
              box-shadow: 2px 2px 2px 1px rgba(223, 116, 74, 0.5);
              color: ${styles.colors.warm}
              font-size: 1.45em;
            }
            button:disabled {
              opacity: 0.4;
            }
            /* FieldFeedbacks */
            form > div.field > div > div.error {
              color: red;
            }
            form > div.field > div > div.warning {
              color: orange;
            }
            form > div.field > div > div.info {
              color: blue;
            }
          `}</style>
      </FormWithConstraints>
    )
  }
}

export default BookingForm
