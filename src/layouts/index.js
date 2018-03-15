import React from 'react'
import { ThemeProvider } from 'styled-components'

// Global Styling
import '../utils/globals'
// Styled-Components Theme Object
import theme from '../utils/theme'

import { Wrapper } from '../components'

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper align="center" direction="column" justify="center" tAlign="center">
      {children()}
    </Wrapper>
  </ThemeProvider>
)

export default TemplateWrapper
