import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropType from 'prop-types'

import { messages } from '../../lib'
import validate from './validate'
import Input from './Input'
import TextArea from './TextArea'

class BookingForm extends Component {
  static propTypes = {
    intl: PropType.object.isRequired
  }
  state = {
    error: false,
    isFetched: false
  }
  submitForm = async values => {
    const { getBookingInfo, reset } = this.props
    return getBookingInfo(values).then(({ payload }) => {
      // NOTE: Checking that this is a successful request.
      // No need to set the message from the server on state
      // use `react-intl` for translations.
      if (payload.message) {
        this.setState(state => ({
          ...state,
          isFetched: true
        }))
      } else if (payload.error) {
        this.setState(state => ({
          ...state,
          error: true,
          isFetched: true
        }))
      }
      reset()
    })
  }
  renderResponse = () => {
    const { error, isFetched } = this.state
    if (isFetched && error) {
      return <strong>{this.props.intl.formatMessage(messages.errorRes)}</strong>
    } else if (!error && isFetched) {
      return (
        <strong>{this.props.intl.formatMessage(messages.successRes)}</strong>
      )
    }
  }
  render() {
    const { handleSubmit, intl, valid } = this.props
    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        <div>
          <Field
            component={Input}
            label={intl.formatMessage(messages.firstName)}
            name="firstName"
            type="text"
          />
        </div>
        <div>
          <Field
            component={Input}
            label={intl.formatMessage(messages.lastName)}
            name="lastName"
            type="text"
          />
        </div>
        <div>
          <Field
            component={Input}
            label={intl.formatMessage(messages.email)}
            name="email"
            type="email"
          />
        </div>
        <div>
          <Field
            component={Input}
            label={intl.formatMessage(messages.phone)}
            name="phone"
            type="tel"
          />
        </div>
        <div>
          <div>
            <Field
              component={TextArea}
              label={intl.formatMessage(messages.message)}
              name="message"
            />
          </div>
        </div>
        <div>
          {this.renderResponse()}
          <button disabled={!valid} type="submit">
            {intl.formatMessage(messages.book)}
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'booking',
  // onSubmitFail: props => console.log(props.payload.error),
  // onSubmitSuccess: props => console.log(props.payload.message),
  validate
})(BookingForm)
