import Header from '@/components/Header/header'
import Nav from '@/components/Nav/nav'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Nav />
    <Component {...pageProps} />
    </>
  )
}
