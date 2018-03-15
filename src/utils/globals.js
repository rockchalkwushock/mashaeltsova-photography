import { injectGlobal } from 'styled-components'

export default injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  html {
    font-size: 1em;
  }
  body {
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
  }
`
