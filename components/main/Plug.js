import { styles } from '../../lib'

const Plug = () => (
  <div>
    <p>
      Contact me if you want to relive those precious moments for years to come!
    </p>
    <style jsx>{`
      div {
        background-color: ${styles.colors.peach};
        font-family: ${styles.fonts.courgette};
        padding: 1em;
      }
    `}</style>
  </div>
)

export default Plug
