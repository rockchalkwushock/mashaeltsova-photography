import { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

class AppModal extends Component {
  static defaultProps = {
    error: false,
    loading: false,
    message: '',
    success: false
  }
  static propTypes = {
    error: PropTypes.bool,
    loading: PropTypes.bool,
    message: PropTypes.string.isRequired,
    success: PropTypes.bool
  }
  state = {
    interval: null,
    isOpen: false
  }
  componentDidMount() {
    // Handle loading logic
    if (this.props.loading) {
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
