import { styles } from '../../lib'

const Header = ({ children }) => (
  <header>
    {children}
    <style jsx>{`
      header {
        align-items: center;
        background-color: ${styles.colors.peach};
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        padding: 1em;
        text-align: center;
      }
    `}</style>
  </header>
)

export default Header
