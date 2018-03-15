import styled from 'styled-components'

const FlexContainer = styled.div`
  align-items: ${({ align }) => align};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  text-align: ${({ tAlign }) => tAlign};
`

FlexContainer.defaultProps = {
  align: 'inherit',
  direction: 'row',
  justify: 'inherit',
  tAlign: 'inherit'
}
FlexContainer.displayName = 'FlexContainer'

export default FlexContainer
