import TopNavigation from "../components/TopNavigation/TopNavigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNavigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
