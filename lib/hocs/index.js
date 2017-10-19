import { compose } from 'redux'

import WithData from './WithData'
import WithIntl from './WithIntl'
import WithLayout from './WithLayout'

export const PageWithData = compose(WithLayout, WithData, WithIntl)
export const PageWithoutData = compose(WithLayout, WithIntl)
