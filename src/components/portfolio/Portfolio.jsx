import React from 'react'
import '../../assets/css/portfolio.css'
import PortfolioData from "../../data/portfolio.json";
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import {BsGithub} from 'react-icons/bs';
import {CgFileDocument} from 'react-icons/cg';
import {MdSmartDisplay} from 'react-icons/md';

const Portfolio = () => {
  return (
      <section id='portfolio'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig"> 
           <h5>My Portfolio</h5>
        </AnimationOnScroll>
     
        <div className = "container portfolio__container">
          {
            PortfolioData.data.map((item) => {
              return (
                <article className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={require(`../../assets/images/${item.image}`)} alt={item.title}/>
                  </div>
                
                  <h3>{item.title}</h3>
                  <div className='portfolio__item-description'>
                    <p>
                      {item.description}
                    </p>
                  </div>
                  <div className='portfolio__item-skills'>
                    {item.skills.map((skill) => <button class="small-circle">{skill}</button>
                    )}
                  </div>
                  <div className='portfolio__item-cta'>
                      { (item.github !=="none") ?
                          <a href={item.github} className='btn btn-small' target='_blank' rel="noopener noreferrer"> <BsGithub size={'1.1rem'}/> GITHUB</a> :null}
                    
                      { (item.docs !=="none") ?
                          <a href={item.docs} className='btn btn-small' target='_blank' rel="noopener noreferrer"><CgFileDocument size={'1rem'}/> DOCS</a> : null}

                      { (item.demo !=="none") ?
                          <a href={item.demo} className='btn btn-small' target='_blank' rel="noopener noreferrer"><MdSmartDisplay size={'15'}/> DEMO</a> : null}
                  </div>
                  
              </article>
    
            )
          })
        }  
      </div>
    </section>
  )
}

export default Portfolio
