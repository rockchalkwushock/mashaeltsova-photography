import React from 'react'

import { Footer, FooterContainer } from './elements'

const AppFooter = () => (
  <Footer>
    <FooterContainer left>
      <h2>Left</h2>
    </FooterContainer>
    <FooterContainer>
      <h2>Right</h2>
    </FooterContainer>
  </Footer>
)

export default AppFooter
