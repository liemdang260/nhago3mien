import "../styles/globals.css";
import Header from "components/common/header";
import Footer from "components/common/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  PageItem,
  PageWrapper,
} from "components/common/PageWrapper";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
