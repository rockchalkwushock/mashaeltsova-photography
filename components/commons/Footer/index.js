/**
 * REVIEW
 * FIXME
 * I will need to pass props on this like `intl`
 */
const Footer = ({ children }) => (
  <footer>
    {children}
    <style>{`
    footer {
      background-color: lightcoral;
      grid-column: span 7;
      height: 50px;
    }
  `}</style>
  </footer>
)

export default Footer
