import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import SkillDetails from './components/skills/Skills'

const App = () => {
  return (
    <>
        <Header />
        <Navigation/>
        <About />
        <Portfolio />
        <Experience />
        {/*<Skills /> */ }
        <SkillDetails title="Languages"/>
        <SkillDetails title="Front-End"/>
        <SkillDetails title="Back-End"/>
        <SkillDetails title="VCS"/>
        <Contact />
        <Footer />
    
    </>
  )
}

export default App