import { styles } from '../../lib'

import Field from './Field'

const Form = () => (
  <form>
    <Field className="firstName" text="First Name" type="text" />
    <Field className="lastName" text="Last Name" type="text" />
    <Field className="email" text="Email" type="email" />
    <Field className="phone" text="Phone" type="tel" />
    <Field className="message" text="Short Message" type="text" />
    <Field className="button" text="Book Now!" type="submit" />
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

export default Form
