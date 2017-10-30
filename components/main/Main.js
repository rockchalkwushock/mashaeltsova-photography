import { styles } from '../../lib'

const Main = ({ children }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        background-color: ${styles.colors.powder};
        display: grid;
        grid-gap: 1em;
        grid-template-areas: 'about about about about'
          'services services services services'
          'gallery gallery gallery gallery' 'booking booking booking booking';
        grid-template-columns: repeat(4, 1fr);
        padding: 1em;
      }
    `}</style>
  </main>
)

export default Main
