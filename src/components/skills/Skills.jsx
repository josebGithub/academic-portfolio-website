import React from 'react';
import '../../assets/css/skills.css';
import SkillsData from "../../data/skills.json";


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
