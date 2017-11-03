import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

import { styles } from '../../lib'

const Modal = ({ msg, status }) => {
  let icon
  if (status === 'error') {
    icon = <FontAwesome name="times-circle" size="3x" />
  } else if (status === 'loading') {
    icon = <FontAwesome name="spinner" pulse size="3x" />
  } else if (status === 'success') {
    icon = <FontAwesome name="check-circle" size="3x" />
  }
  return (
    <div className={status}>
      {icon}
      <span>{msg}</span>
      <style jsx>{`
        div {
          background-color: ${styles.colors.white};
          display: flex;
          flex-direction: column;
          padding: 0.5em;
        }
        div > * {
          padding: 0.25em;
          flex: 1 1 auto;
        }
        .error {
          color: red;
        }
        .loading {
          color: ${styles.colors.warm};
        }
        .success {
          color: green;
        }
        span {
          color: ${styles.colors.charcoal};
        }
      `}</style>
    </div>
  )
}

Modal.propTypes = {
  msg: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default Modal
