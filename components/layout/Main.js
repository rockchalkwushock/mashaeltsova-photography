import PropTypes from 'prop-types'

import { styles } from '../../lib'

const Main = ({ children, className }) => (
  <main className={className}>
    {children}
    <style jsx>{`
      main {
        background-color: ${styles.colors.powder};
      }
      .index {
        display: grid;
        grid-gap: 1em;
        grid-template-areas: 'about about about about'
          'services services services services'
          'gallery gallery gallery gallery' 'booking booking booking booking';
        grid-template-columns: repeat(4, 1fr);
        padding: 1em;
      }
      .gallery {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
      }
    `}</style>
  </main>
)

Main.propTypes = {
  // NOTE Not marking isRequired because I need to handle Error State in routing.
  className: PropTypes.string
}

export default Main
