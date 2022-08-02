import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from '../components/about'
import Waves from '../components/waves'
import Contact from '../components/contact'
import Header from '../components/header'
import Projects from '../components/projects'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shahryar Valizadeh | Portfolio</title>
      </Head>
      <Header />
      <Waves color1="#82eefd" color2="#4579e2" color3="#3461c1" color4="#0f1626"/>
      <About />
      <Waves color1="#fffdd0" color2="#f3e5ab" color3="#f5f5dc" color4="#f5f5f5"/>
      <Projects />
      <Waves color1="#880808" color2="#fa8072" color3="#d2042d" color4="#ff533d"/>
      <Contact />
      <Waves color1="#edb26f" color2="#6e5334" color3="#473622" color4="#ab987a"/>
    </>
  )
}
