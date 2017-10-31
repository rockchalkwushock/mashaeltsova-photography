import { styles } from '../../lib'

const Nav = ({ children }) => (
  <nav>
    {children}
    <style jsx>{`
      nav {
        /* background-color: ${styles.colors.peach}; */
        display: flex;
        flex: 1 1 auto;
        justify-content: space-around;
        padding: 0.5em;
      }
    `}</style>
  </nav>
)

export default Nav
