import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <title>TNT Online</title>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
