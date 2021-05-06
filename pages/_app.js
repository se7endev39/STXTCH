import "../scss/style.scss";
import MainLayout from "../layout/MainLayout";
import '../styles/index.css'
import '../styles/global.css'
import '../assets/fonts/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>);
}

export default MyApp;
