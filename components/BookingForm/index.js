/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropType from 'prop-types'

import { messages } from '../../lib'
import validate from './validate'
import CustomButton from './CustomButton'
import CustomField from './CustomField'
import CustomSpan from './CustomSpan'
import Form from './Form'

/**
 * REVIEW
 *
 * I would like to when an input is correct display a green circle with a white
 * check mark to the user or red circle with white 'X'. I think it would be
 * really cool if when the user moved to the next input:
 *  'valid': icon rolled out from behind input and border highlight green.
 *  'invalid': icon rolled out from behind input and border highlight red as well as
 *            display error message. Shake input too.
 *
 * For time being this.renderError() & this.renderSuccess() will do.
 * In the future on:
 *  'error': overlay a modal for X seconds that says there was an internal error.
 *  'success': transition form to a successful icon or message using animations.
 */

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
  renderError = () => (
    <CustomSpan>{this.props.intl.formatMessage(messages.errorRes)}</CustomSpan>
  )
  renderForm = () => {
    const { handleSubmit, intl, valid } = this.props
    return (
      <Form onSubmit={handleSubmit(this.submitForm)}>
        <Field
          component={CustomField}
          label={intl.formatMessage(messages.firstName)}
          name="firstName"
          type="text"
        />
        <Field
          component={CustomField}
          label={intl.formatMessage(messages.lastName)}
          name="lastName"
          type="text"
        />
        <Field
          component={CustomField}
          label={intl.formatMessage(messages.email)}
          name="email"
          type="email"
        />
        <Field
          component={CustomField}
          label={intl.formatMessage(messages.phone)}
          name="phone"
          type="tel"
        />
        <Field
          component={CustomField}
          label={intl.formatMessage(messages.message)}
          name="message"
        />
        <CustomButton valid={!valid}>
          {intl.formatMessage(messages.book)}
        </CustomButton>
      </Form>
    )
  }
  renderSuccess = () => (
    <CustomSpan>
      {this.props.intl.formatMessage(messages.successRes)}
    </CustomSpan>
  )
  render() {
    const { error, isFetched } = this.state
    const view =
      !isFetched && !error
        ? this.renderForm()
        : isFetched && error ? this.renderError() : this.renderSuccess()
    return view
  }
}

export default reduxForm({
  form: 'booking',
  validate
})(BookingForm)
