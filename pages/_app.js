import { AnimatePresence } from "framer-motion";
import LayOut from "../components/LayOut";
import { GlobalStyle } from "../styles/globalStyles";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <LayOut>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </LayOut>
    </>
  );
}

export default MyApp;
