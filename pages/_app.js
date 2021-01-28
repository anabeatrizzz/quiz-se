import { createGlobalStyle, ThemeProvider } from 'styled-components'

// Arquivo com informações sobre o quiz
import db from '../db.json';

export default function App({ Component, pageProps }) {
  return (
    <>
      <EstiloGlobal />
      <ThemeProvider theme={db.tema}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// Definindo um componente junto com o estilo dele
const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${ db.tema.cores.textoContraste };
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`