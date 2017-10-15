import React from 'react'
import { Field, reduxForm } from 'redux-form'

// FIXME: Took this from redux-form website for test example.

const SimpleForm = props => {
  const { getBookingInfo, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(getBookingInfo)}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Phone Number</label>
        <div>
          <Field
            name="phone"
            component="input"
            type="tel"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div>
        <label>Message</label>
        <div>
          <Field name="message" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
