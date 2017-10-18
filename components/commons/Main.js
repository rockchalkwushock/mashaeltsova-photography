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

const Main = ({ children }) => (
  <div>
    <Meta />
    <main className="grid">
      {children}
      <style jsx>{`
        .grid {
          background-color: ${styles.colors.white};
          display: grid;
          grid-gap: 1em;
          grid-template-columns: repeat(7, 1fr);
          padding: 0 1em;
        }
      `}</style>
    </main>
  </div>
)

export default Main
