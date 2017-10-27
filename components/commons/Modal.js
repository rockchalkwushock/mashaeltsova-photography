import { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

class AppModal extends Component {
  static defaultProps = {
    message: '',
    status: {
      error: false,
      loading: false,
      success: false
    }
  }
  static propTypes = {
    message: PropTypes.string.isRequired,
    status: PropTypes.shape({
      disabled: PropTypes.bool,
      error: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired,
      success: PropTypes.bool.isRequired
    })
  }
  state = {
    interval: null,
    isOpen: false
  }
  componentDidMount() {
    // Handle loading logic
    if (this.props.status.loading) {
      this.openModal()
    }
  }
  closeModal = () => {
    this.setState({ isOpen: false })
  }
  openModal = () => {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <Modal isOpen={this.state.isOpen}>
        {/* TODO ICON OF SOME KIND? POSSIBLY ANIMATED OR LOADER */}
        {/* TODO CUSTOM STYLES */}
        <h1>{this.props.message}</h1>
      </Modal>
    )
  }
}

export default AppModal
