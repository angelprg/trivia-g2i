import { Provider } from "react-redux";
import Head from "next/head";
import store from "redux/store";
import styles from "theme/styles.global.sass";
import { MainContainer } from "layouts";
import logoSrc from "assets/img/g2i_logo.png";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>G2I Trivia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={logoSrc} />
      </Head>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </Provider>
  );
}

export default MyApp;
