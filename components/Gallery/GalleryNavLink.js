import { styles } from '../../lib'

const GalleryNavLink = ({ active, text }) => (
  <button className={active ? 'active' : null} name={text}>
    {text}
    <style jsx>{`
      button {
        background-color: ${styles.colors.peach};
        border: none;
        color: ${styles.colors.warm};
        flex: 1 1 auto;
      }
      button.active {
        background-color: ${styles.colors.warm};
        color: ${styles.colors.peach};
      }
    `}</style>
  </button>
)

export default GalleryNavLink
