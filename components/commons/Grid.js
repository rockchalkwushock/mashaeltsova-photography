const Grid = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 0.5em;
        justify-items: center;
        min-height: 60vh; /* REVIEW MUST HAVE THIS OR YOU WILL GET JUMPING EFFECT OF FOOTER */
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
