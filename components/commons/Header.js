import { styles } from '../../lib'
/**
 * FIXME update with `intl` || `messages`.
 * FIXME add PropTypes once the above is done.
 */
const Header = ({ text }) => (
  <header>
    <h1>{text}</h1>
    <style jsx>{`
      header {
        font-family: ${styles.fonts.courgette};
        padding-top: 1.2em;
      }
    `}</style>
  </header>
)

export default Header
