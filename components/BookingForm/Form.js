import {
  FormWithConstraints,
  FieldFeedback,
  FieldFeedbacks
} from 'react-form-with-constraints'

import { styles } from '../../lib'

const Form = props => (
  <FormWithConstraints ref={props.formRef} onSubmit={props.onSubmit} noValidate>
    {/* FIRST NAME */}
    <div className="field">
      <input
        type="text"
        name="firstName"
        value={props.values.firstName}
        onChange={props.onChange}
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
        value={props.values.lastName}
        onChange={props.onChange}
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
        value={props.values.email}
        onChange={props.onChange}
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
        value={props.values.phone}
        onChange={props.onChange}
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
        value={props.values.message}
        onChange={props.onChange}
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
      <button disabled={props.disabled}>Book Now!</button>
    </div>
    {/* COMPONENT STYLING */}
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

export default Form
