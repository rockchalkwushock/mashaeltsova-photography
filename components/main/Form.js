import PropTypes from 'prop-types'

import { styles } from '../../lib'
import Field from './Field'

const Form = props => (
  <form onSubmit={props.onSubmit}>
    <Field
      className="firstName"
      onChange={props.onChange}
      text="First Name"
      type="text"
      value={props.values.firstName}
    />
    <Field
      className="lastName"
      onChange={props.onChange}
      text="Last Name"
      type="text"
      value={props.values.lastName}
    />
    <Field
      className="email"
      onChange={props.onChange}
      text="Email"
      type="email"
      value={props.values.email}
    />
    <Field
      className="phone"
      onChange={props.onChange}
      text="Phone"
      type="tel"
      value={props.values.phone}
    />
    <Field
      className="message"
      onChange={props.onChange}
      text="Short Message"
      type="text"
      value={props.values.message}
    />
    <Field
      className="button"
      disabled={props.disabled}
      text="Book Now!"
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
