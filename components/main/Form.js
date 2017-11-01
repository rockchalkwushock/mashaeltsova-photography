import PropTypes from 'prop-types'

import { styles } from '../../lib'
import Field from './Field'

const Form = ({ disabled, messages, onChange, onSubmit, values }) => (
  <form onSubmit={onSubmit}>
    <Field
      className="firstName"
      onChange={onChange}
      text={messages.formFirstName}
      type="text"
      value={values.firstName}
    />
    <Field
      className="lastName"
      onChange={onChange}
      text={messages.formLastName}
      type="text"
      value={values.lastName}
    />
    <Field
      className="email"
      onChange={onChange}
      text={messages.formEmail}
      type="email"
      value={values.email}
    />
    <Field
      className="phone"
      onChange={onChange}
      text={messages.formPhone}
      type="tel"
      value={values.phone}
    />
    <Field
      className="message"
      onChange={onChange}
      text={messages.formMessage}
      type="text"
      value={values.message}
    />
    <Field
      className="button"
      disabled={disabled}
      text={messages.buttonBooking}
      type="submit"
    />
    <style jsx>{`
      form {
        background-color: ${styles.colors.white};
        display: grid;
        grid-template-areas: 'firstName firstName' 'lastName lastName'
          'email email' 'phone phone' 'message message'
          'bookingButton bookingButton';
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1em;
        padding: 1em;
        text-align: left;
      }
    `}</style>
  </form>
)

Form.propTypes = {
  disabled: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    message: PropTypes.string,
    phone: PropTypes.string
  })
}

export default Form
