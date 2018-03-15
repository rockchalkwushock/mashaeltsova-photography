import styled from 'styled-components'

const HomeGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  justify-content: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  }
  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`

HomeGrid.displayName = 'HomeGrid'

export default HomeGrid
