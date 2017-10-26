import { styles } from '../../../lib'

const Button = ({ children, valid }) => (
  <div className="field">
    <button disabled={valid} type="submit">
      {children}
    </button>
    <style jsx>{`
    .field {
      grid-column: span 6;
      line-height: 44px;
      position: relative;
      text-align: center;
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
    @media (min-width: 768px) {
      button {
        width: 60%;
      }
    }
  `}</style>
  </div>
)

export default Button
