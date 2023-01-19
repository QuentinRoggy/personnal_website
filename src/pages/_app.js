import Header from '@/components/Header/header'
import Nav from '@/components/Nav/nav'

import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    document.body.classList.add("dark");
  })

  return (
    <>
    <Header />
    <Nav />
    <Component {...pageProps} />
    </>
  )
}
