import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Tutorial</title>
      <meta name="viewport" content='width=device-width, initial-scale=1'/>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Tutorial is a tutorial"/>
    </Head>
    <Component {...pageProps} />
  </>
}
