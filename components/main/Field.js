import { styles } from '../../lib'

const Field = props => {
  if (props.className === 'button') {
    return (
      <div className={props.className}>
        <button type={props.type}>{props.text}</button>
        <style jsx>{`
          .button {
            grid-area: bookingButton;
            grid-column: 1 / 3;
            grid-row: 5 / 6;
          }
          button {
            background-color: ${styles.colors.warm};
            border: 0;
            box-shadow: 4px 4px 4px rgba(54, 69, 79, 0.7);
            color: ${styles.colors.white};
            font-family: ${styles.fonts.courgette};
            font-size: 1em;
            outline: 0;
            padding: 1em;
            text-transform: uppercase;
            width: 100%;
          }
          button:focus,
          button:hover {
            background-color: ${styles.colors.powder};
            color: ${styles.colors.warm};
            font-size: 1.2em;
            -webkit-transition: background-color 0.3s ease-out;
            -moz-transition: background-color 0.3s ease-out;
            transition: background-color 0.3s ease-out;
          }
          @media (min-width: 768px) {
            .button {
              grid-area: bookingButton;
              grid-column: 1 / 3;
              grid-row: 4 / 5;
            }
          }
        `}</style>
      </div>
    )
  }
  return (
    <div className={props.className}>
      <label htmlFor={props.className}>{props.text}</label>
      <input type={props.type} name={props.className} />
      <style jsx>{`
        label {
          display: block;
        }
        input {
          border: 0;
          border-bottom: 1px solid ${styles.colors.warm};
          color: ${styles.colors.charcoal};
          outline: 0;
          padding: 0 0.5em;
          width: 100%;
        }
        .firstName {
          grid-area: firstName;
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        .lastName {
          grid-area: lastName;
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }
        .email {
          grid-area: email;
          grid-column: 1 / 3;
          grid-row: 2 / 3;
        }
        .phone {
          grid-area: phone;
          grid-column: 1 / 3;
          grid-row: 3 / 4;
        }
        .message {
          grid-area: message;
          grid-column: 1 / 3;
          grid-row: 4 / 5;
        }
        @media (min-width: 768px) {
          .email {
            grid-area: email;
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }
          .phone {
            grid-area: phone;
            grid-column: 2 / 3;
            grid-row: 2 / 3;
          }
          .message {
            grid-area: message;
            grid-column: 1 / 3;
            grid-row: 3 / 4;
          }
        }
      `}</style>
    </div>
  )
}

export default Field
