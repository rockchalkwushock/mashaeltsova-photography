import { compose } from 'redux'

import WithCloudinary from './WithCloudinary'
import WithData from './WithData'
import WithIntl from './WithIntl'
import WithLayout from './WithLayout'

/**
 * NOTE
 *
 * Remember that compose is executing in order so the HOC's
 * are being applied left to right.
 */

export const PageWithData = compose(WithLayout, WithData, WithIntl)
export const PageWithoutData = compose(WithLayout, WithIntl, WithCloudinary)
