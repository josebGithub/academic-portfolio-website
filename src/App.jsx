import React from 'react'
/*import Home from './components/home/Home_bk' */
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer' 
import Skills from './components/skills/Skills' 
/*import {Skills} from './components/skills/Skills';*/
/* import SkillDetails from './components/skills/Skills'; */


const App = () => {
  return (
    <>
       {/* <Header /> */}
        <Navigation/>
        <Home/>
        <About />
        <Portfolio />
        <Experience />
        <Skills />

        {/*
        <SkillDetails title="Languages"/>
        <SkillDetails title="Front-End"/>
        <SkillDetails title="Back-End"/>
        <SkillDetails title="VCS"/> */}
        <Contact />
        <Footer /> 
    
    </>
  )
}

export default App