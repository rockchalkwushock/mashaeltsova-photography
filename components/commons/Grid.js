const Grid = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 0.5em;
        justify-items: center;
        padding: 1em;
      }
      @media (min-width: 768px) {
        div {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
      }
    `}</style>
  </div>
)

export default Grid
