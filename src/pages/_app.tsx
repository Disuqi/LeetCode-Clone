import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <RecoilRoot>
    <Head>
      <title>SHUSH</title>
      <meta name="viewport" content='width=device-width, initial-scale=1'/>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="SHUSH is a social media platform for sharing your thoughts and ideas with the world."/>
    </Head>
    <Component {...pageProps} />
  </RecoilRoot>
  </>
}
