import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LivepeerConfig, ThemeConfig, createReactClient, studioProvider, } from '@livepeer/react'

function MyApp({ Component, pageProps }: AppProps) {

  const client = createReactClient({
    provider: studioProvider({ apiKey: '88117164-d171-4324-97d9-e3835ba5b45c' }),
  });

  const livepeerTheme: ThemeConfig = {
    colors: {
      accent: 'rgb(0, 145, 255)',
      containerBorderColor: 'rgba(0, 145, 255, 0.9)',
    },
  };

  return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
      <Component {...pageProps} />
    </LivepeerConfig>
  )
}

export default MyApp
