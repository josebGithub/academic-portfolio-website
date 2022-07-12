import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Navigation/>
        <About />
        <Portfolio />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
    
    </>
  )
}

export default App