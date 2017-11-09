import PropTypes from 'prop-types'

import P from './P'
import { styles } from '../../lib'

const Plug = ({ messages }) => (
  <div>
    <P className="plug">{messages.sectionPlug}</P>
    <style jsx>{`
      div {
        background-color: ${styles.colors.peach};
        font-family: ${styles.fonts.courgette};
        padding: 1em;
      }
    `}</style>
  </div>
)

Plug.propTypes = {
  messages: PropTypes.object.isRequired
}

export default Plug
