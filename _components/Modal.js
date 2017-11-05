import Photo from './Photo'

const Modal = ({ id, onDismiss }) => (
  <div onClick={onDismiss}>
    <Photo id={id} />
  </div>
)

export default Modal
