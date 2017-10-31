import { styles } from '../../lib'

const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        background-color: ${styles.colors.peach};
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 1em;
      }
      @media (min-width: 768px) {
        footer {
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
        }
      }
    `}</style>
  </footer>
)

export default Footer
