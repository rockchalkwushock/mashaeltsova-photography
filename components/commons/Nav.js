import PropTypes from 'prop-types'

import { styles } from '../../lib'

const Nav = ({ children }) => (
  <nav>
    {children}
    <style jsx>{`
      nav {
        background-color: ${styles.colors.peach};
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </nav>
)

Nav.propTypes = {
  children: PropTypes.array.isRequired
}

export default Nav
