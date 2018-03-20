import React from 'react'
import { ThemeProvider } from 'styled-components'

// Global Styling
import '../utils/globals'
// Styled-Components Theme Object
import theme from '../utils/theme'

import { AppFooter, AppMenu, Wrapper } from '../components'

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <AppMenu />
      {children()}
      <AppFooter />
    </Wrapper>
  </ThemeProvider>
)

export default TemplateWrapper
