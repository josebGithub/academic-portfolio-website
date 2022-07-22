import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
/*import Skills from './components/skills/Skills.jsx.bk'*/
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import SkillsDetails from './components/skills/SkillDetails'

const App = () => {
  return (
    <>
        <Header />
        <Navigation/>
        <About />
        <Portfolio />
        <Experience />
        {/*<Skills /> */ }
        <SkillsDetails title="Languages"/>
        <SkillsDetails title="Front-End"/>
        <SkillsDetails title="Back-End"/>
        <SkillsDetails title="VCS"/>
        <Contact />
        <Footer />
    
    </>
  )
}

export default App