/**
 * REVIEW
 * FIXME
 * I will need to pass props on this like `intl`
 */
const Navigation = ({ children }) => (
  <nav>
    {children}
    <style>{`
    nav {
      background-color: lightcoral;
      grid-column: span 7;
      height: 50px;
    }
  `}</style>
  </nav>
)

export default Navigation
