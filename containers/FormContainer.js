import { connect } from 'react-redux'

import { BookingForm } from '../components'
import { getBookingInfo } from '../lib'

export default connect(null, {
  getBookingInfo
})(BookingForm)
