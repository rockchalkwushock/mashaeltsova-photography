const Ul = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding-top: 1em;
        text-align: center;
      }
    `}</style>
  </ul>
)

export default Ul
