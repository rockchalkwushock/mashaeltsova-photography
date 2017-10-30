const Ul = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        flex: 1 1 auto;
        padding-top: 1em;
        text-align: center;
      }
    `}</style>
  </ul>
)

export default Ul
