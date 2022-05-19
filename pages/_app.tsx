import '../styles/globals.css';
import React from 'react';
import 'antd/dist/antd.css';
import "swiper/css/bundle";
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../next-seo.config';
import {Provider} from 'react-redux'
import {store} from '../src/store'
function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    
    </Provider>
  );
}
/**a comment */

export default MyApp;
