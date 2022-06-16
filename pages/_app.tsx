import '../styles/globals.css';
import React from 'react';
import 'antd/dist/antd.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css'
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../next-seo.config';
import { Provider } from 'react-redux';
import { store} from '../src/store';
import { PersistGate } from 'redux-persist/integration/react';
import {ToastContainer} from 'react-toastify'
import {persistStore} from 'redux-persist'
function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <ToastContainer/>
         <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      <PersistGate loading={null} persistor={persistor}>
      </PersistGate>
    </Provider>
  );
}
/**a comment */

export default MyApp;
