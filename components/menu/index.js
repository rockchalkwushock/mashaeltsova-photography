import PropTypes from 'prop-types'

import ScrollInNav from './ScrollInNav'

const Menu = ({ messages }) => <ScrollInNav messages={messages} />

Menu.propTypes = {
  messages: PropTypes.object.isRequired
}

export default Menu
