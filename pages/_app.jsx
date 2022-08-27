import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />

      <link rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
