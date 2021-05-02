import Head from 'next/head'

import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Guilherme Leite</title>
      <meta name="description" content="Juntos pelos sintrenses" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
