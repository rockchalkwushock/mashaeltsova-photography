import { styles } from '../../lib'

const CustomSpan = ({ children }) => (
  <span className="error-msg">
    {children}
    <style jsx>{`
      .error-msg {
        color: ${styles.colors.warm};
        font-size: 0.8em;
      }
    `}</style>
  </span>
)

export default CustomSpan
