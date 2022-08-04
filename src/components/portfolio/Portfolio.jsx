import React from 'react'
import '../../assets/css/portfolio.css'
import PortfolioData from "../../data/portfolio.json";

const Portfolio = () => {
  return (
      <section id='portfolio'>
        <h5>My Portfolio</h5>
        <h2>Show my work</h2>
  
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
                  <div className='portfolio__item-cta'>
                      { (item.github !="none") ?
                          <a href={item.github} className='btn' target='_blank'>Github</a> :null}
                    
                      { (item.docs !="none") ?
                          <a href={item.docs} className='btn btn-primary' target='_blank'>Document</a> : null}

                      { (item.demo !="none") ?
                          <a href={item.demo} className='btn btn-primary' target='_blank'>Demo</a> : null}
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
