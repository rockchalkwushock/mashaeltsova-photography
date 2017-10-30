import { styles } from '../../lib'

const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        background-color: ${styles.colors.peach};
        display: flex;
        flex-direction: column;
        padding: 1em;
      }
      @media (min-width: 768px) {
        footer {
          align-items: center;
          flex-direction: row;
        }
      }
    `}</style>
  </footer>
)

export default Footer
