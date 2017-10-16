import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropType from 'prop-types'

import { messages } from '../../lib'
import validate from './validate'
import Input from './Input'
import TextArea from './TextArea'

// FIXME: Took this from redux-form website for test example.

const BookingForm = props => {
  const {
    getBookingInfo,
    handleSubmit,
    intl,
    pristine,
    reset,
    submitting
  } = props
  return (
    <form onSubmit={handleSubmit(getBookingInfo)}>
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
        <button type="submit" disabled={pristine || submitting}>
          {intl.formatMessage(messages.book)}
        </button>
      </div>
    </form>
  )
}

BookingForm.propTypes = {
  intl: PropType.object.isRequired
}

export default reduxForm({
  form: 'booking',
  validate
})(BookingForm)
