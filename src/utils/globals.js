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
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}
`
