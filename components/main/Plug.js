import { P } from '../commons'
import { styles } from '../../lib'

const Plug = () => (
  <div>
    <P className="plug">
      Contact me if you want to relive those precious moments for years to come!
    </P>
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
