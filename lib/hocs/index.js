import { compose } from 'redux'

import WithCloudinary from './WithCloudinary'
import WithData from './WithData'
import WithIntl from './WithIntl'

/**
 * NOTE
 *
 * Remember that compose is executing in order so the HOC's
 * are being applied left to right.
 */

export const PageWithData = compose(WithData, WithIntl)
export const PageWithoutData = compose(WithIntl, WithCloudinary)
