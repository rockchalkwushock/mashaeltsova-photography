import Meta from './Meta'

/**
 * REVIEW: Here is where I need to setup the grid.
 */

export default ({ children }) => (
  <main>
    {children}
    <Meta />
    <style jsx>{`
      main {
      }
    `}</style>
  </main>
)
