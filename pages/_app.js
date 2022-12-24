import "../styles/globals.css";
import { CardDataProvider } from "../components/Context";
import { Provider } from "react-redux";
import { store } from "../store";
function MyApp({ Component, pageProps }) {
  return (
    <CardDataProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CardDataProvider>
  );
}

export default MyApp;
