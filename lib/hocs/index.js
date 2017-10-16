import { compose } from 'redux'

import WithData from './WithData'
import WithIntl from './WithIntl'

const Page = compose(WithData, WithIntl)

export default Page
