import { createGlobalStyle } from 'styled-components'
import { App } from 'app'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
  }
  html {
    font-size: 1em;
  }
  body {
    font-family: 'Fira Code', sans-serif;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`

function Root () {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}

export { Root }
