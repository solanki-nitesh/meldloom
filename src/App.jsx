import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Categories from './components/Categories'
import Philosophy from './components/Philosophy'
import Launch from './components/Launch'
import Connect from './components/Connect'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        logo={logo}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main id="main">
        <Hero logo={logo} />
        <Intro />
        <Categories />
        <Philosophy />
        <Launch />
        <Connect />
        <Contact />
      </main>
      <Footer logo={logo} />
    </>
  )
}
