/**
 * REVIEW
 * This is where the CSS-Grid is being established!
 * FIXME
 * The only reason there is the `<div />` is `<Meta />` will be seen as an
 * element in the grid and take up space. There is likely a way to hide it
 * from the grid. Fix this later to get rid of this errant `<div />`.
 */
import Meta from './Meta'
import { styles } from '../../lib'

const Main = ({ children, className, id }) => (
  <div>
    <Meta />
    <main className={className} id={id}>
      {children}
      <style jsx>{`
        main {
          background-color: ${styles.colors.white};
          padding: 0 1em;
        }
        .mainGrid {
          display: grid;
          grid-gap: 1em;
          grid-template-columns: repeat(6, 1fr);
        }
        .galleryGrid {
        }
      `}</style>
    </main>
  </div>
)

export default Main
