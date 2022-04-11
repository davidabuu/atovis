import '../styles/globals.css';
import React from 'react';
import 'antd/dist/antd.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../../my-app/next-seo.config';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <ChakraProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
/**a comment */

export default MyApp;
