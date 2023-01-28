import "../styles/globals.css";
import React from "react";
import { CardDataProvider } from "../components/Context";
import { Provider } from "react-redux";
import { store } from "../store";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CardDataProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CardDataProvider>
  );
}

export default MyApp;
