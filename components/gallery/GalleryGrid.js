const GalleryGrid = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        border: 2px solid lime;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, auto));
        grid-gap: 0.5em;
        justify-items: center;
        padding-top: 0.5em;
      }
    `}</style>
  </div>
)

export default GalleryGrid
