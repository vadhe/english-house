import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import 'modern-normalize'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import Fonts from 'theme/Fonts'
import theme from 'theme/theme'

import './global.scss'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>English House</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
