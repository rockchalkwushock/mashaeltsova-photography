import React from 'react'
import styled from 'styled-components'

export const StyledTitle = styled.h1`
  color: ${({ color }) => color};
`

StyledTitle.displayName = 'StyledTitle'
StyledTitle.defaultProps = {
  color: 'lightcoral'
}

const Title = ({ color, text }) => (
  <StyledTitle color={color}>{text}</StyledTitle>
)

export default Title
