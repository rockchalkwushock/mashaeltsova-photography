import React from 'react'

// Global Styling
import '../utils/globals'

import { Wrapper } from '../components'

const TemplateWrapper = ({ children }) => <Wrapper>{children()}</Wrapper>

export default TemplateWrapper
