import { styles } from '../../lib'

const Button = ({ children, valid }) => (
  <button className="form-button" disabled={valid} type="submit">
    {children}
    <style jsx>{`
      .form-button {
        background-color: ${styles.colors.peach};
        border: none;
        color: ${styles.colors.warm};
        font-size: 1.25em;
        font-family: ${styles.fonts.nunito};
        font-size: 1em;
        grid-column: span 6;
        padding: 0.5em;
        text-align: center;
        width: 80%;
      }
    `}</style>
  </button>
)

export default Button
