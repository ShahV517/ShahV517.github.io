import React, { useEffect } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({duration: 1200})
  }
  , [])

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
