import { connect } from 'react-redux'

import { Form } from '../components'
import { getBookingInfo } from '../lib'

export default connect(null, { getBookingInfo })(Form)
