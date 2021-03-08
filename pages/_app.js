import { Provider } from "react-redux";
import store from "redux/store";
import styles from "theme/styles.global.sass";
import { MainContainer } from "layouts";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </Provider>
  );
}

export default MyApp;
