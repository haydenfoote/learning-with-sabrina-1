import "../styles/globals.css";
import { CardDataProvider } from "../components/Context";

function MyApp({ Component, pageProps }) {
  return (
    <CardDataProvider>
      <Component {...pageProps} />
    </CardDataProvider>
  );
}

export default MyApp;
