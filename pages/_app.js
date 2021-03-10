import LayOut from "../components/LayOut"
import { GlobalStyle } from "../styles/globalStyles"

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyle />
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </>
  )
}

export default MyApp
