import Header from '@/components/Header/header'
import Nav from '@/components/Nav/nav'
import MobileNav from '@/components/MobileNav/mobileNav'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Nav />
    <MobileNav />
    <Component {...pageProps} />
    </>
  )
}
