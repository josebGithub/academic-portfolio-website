import React from 'react';
import '../../assets/css/skills.css';
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import SkillsData from "../../data/skills.json";


const Skills = () => {
    return (
        <section id='skills'>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig"> 
                <h5>My Skills</h5>
            </AnimationOnScroll>
           
               {Object.keys(SkillsData).map((key) => {
                return SkillDetails(key)
               })
               }
        </section>
    )
}


function SkillDetails(title) {
    return (
          <div className = "container skills__container">
            <div className = "skills__content">   
                <div className='skills__title'>{title}</div>
                    {SkillsData[title].map((item) => {
                        return <div><div className='skills__details'><img src={require(`../../assets/images/${item.imageUrl}`)} alt={item.name}/><small>{item.name
                        }</small> </div></div>;
    
                })}
            </div> 
          </div>
    );
}


/*
export default function SkillDetails(props) {
    return (
          <div className = "container skills__container">
            <div className = "skills__content">   
                <div className='skills__title'>{props.title}</div>
                    {SkillsData[props.title].map((item) => {
                        return <div><div className='skills__details'><img src={require(`../../assets/images/${item.imageUrl}`)} alt={item.name}/><small>{item.name
                        }</small> </div></div>;
    
                })}
            </div> 
          </div>
    );
}

*/

export default Skills