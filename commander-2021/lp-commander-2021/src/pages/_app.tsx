import 'swiper/swiper.scss'
import '../styles/main.scss'
import React from 'react'
import CookieHolder from '../components/CookieHolder'
// Declare gTM dataLayer array.
declare global {
  interface Window {
    dataLayer: any[]
  }
}

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <CookieHolder />
    </>
  )
}

export default MyApp
