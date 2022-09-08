import React from 'react'
import '../../assets/css/about.css'
import '../../assets/css/header.css'
import MYPICTURE from '../../assets/images/josephineB1.jpg' 
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import {MdWork} from 'react-icons/md'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {TbTools} from 'react-icons/tb'
import HSocials from '../header/HSocials'



const About = () => {
  return (
    <section id='about'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig"> 
          <h5>About Me</h5>
        </AnimationOnScroll>
     
      <div className="container about__container">
        <div className = "about__me className">
          <div className="about__me-image">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig"> 
              <img src={MYPICTURE} alt="Josephine But" />
            </AnimationOnScroll>
          </div>
        </div> 

      
        <div className="about__content">
              <p>
                Hello! My name is Josephine But. I have 9+ years of work experiences as a Software Developer/Tester. Currently, I graduated from my Master Of Science in Software Development to pick up the new technical skills and methodologies in Software Development. <br/><br/>
                I love to do programming and keep on learning new technologies and programming languages, the rewards come relatively quickly after you fixing the mistakes or solve a problem. In my spare time, I enjoy to go to the gym, making candles, cooking and baking.<br/><br/>

                I am looking for a Full Stack Developer Job, Feel free to reach out to me!
              </p>

              <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    
    </section>
  )
}

export default About