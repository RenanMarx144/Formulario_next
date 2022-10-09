// import '../style/home.scss';
import { AppProps } from 'next/app'
import Styles from "../style/global.scss";
import Styles2 from "../style/home.scss";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  export default MyApp