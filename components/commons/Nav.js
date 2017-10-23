import PropTypes from 'prop-types'

import { styles } from '../../lib'

const Nav = ({ children }) => (
  <nav>
    {children}
    <style jsx>{`
      nav {
        background-color: ${styles.colors.peach};
        color: ${styles.colors.warm};
        display: flex;
        grid-column: span 12;
        justify-content: space-around;
      }
    `}</style>
  </nav>
)

Nav.propTypes = {
  children: PropTypes.array.isRequired
}

export default Nav
