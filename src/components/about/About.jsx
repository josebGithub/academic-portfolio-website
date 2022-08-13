import React from 'react'
import '../../assets/css/about.css'
import MYPICTURE from '../../assets/images/josephineB2.jpg' 
import {MdWork} from 'react-icons/md'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {TbTools} from 'react-icons/tb'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className = "about__me">
          <div className = "about__me-image">
            <img src={MYPICTURE} alt="Josephine But" />
          </div>
        </div> 

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Experience</h5>
              <small>9+ Years Working Experiences</small>
            </article>

            <article className='about__card'>
              <AiOutlineFileSearch className='about__icon'/>
              <h5>Portfolio</h5>
              <small>My academic portfolio</small>
            </article>

            <article className='about__card'>
              <TbTools className='about__icon'/>
              <h5>Skills</h5>
              <small>Variety of skills</small>
            </article>
          </div>
              <p>
                Hello! My name is Josephine But. I have 9+ years of work experiences as a Software Developer/Tester. Currently, I graduated from my Master Of Science in Software Development to pick up the new technical skills and methodologies in Software Development.
                I love to do programming and keep on learning new technologies and programming languages, the rewards come relatively quickly after you fixing the mistakes or solve a problem. In my spare time, I enjoy to go to the gym, making candles, cooking and baking. 
              </p>

              <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>
      </div>
    
    </section>
  )
}

export default About