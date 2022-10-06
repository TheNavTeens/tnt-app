import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <title>TNT Online</title>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
