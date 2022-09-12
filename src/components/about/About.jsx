import React from 'react'
import '../../assets/css/about.css'
import '../../assets/css/header.css'
import AboutData from "../../data/about.json";
import MYPICTURE from '../../assets/images/josephineB1.jpg' 
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css"


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
            {AboutData.data.map((item) => {
               return (
                 <div>
                  <p>
                    {item.about}
                  </p>

                  <a href="#contact" className='btn btn-primary'>Contact Me</a>
                  </div>
                )
              })
            }
        </div>
      </div>
    
    </section>
  )
}

export default About