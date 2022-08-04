import React from 'react'
import '../../assets/css/skills.css'
import PythonPic from '../../assets/images/python_18894.png' 
import JavaPic from '../../assets/images/java_22523.png' 
import JavaScriptPic from '../../assets/images/javascript_icon_130900.png' 
import CPic from '../../assets/images/c_original_logo_icon_146611.png' 
import PHPPic from '../../assets/images/file_type_php_icon_130266.png'

const Skills = () => {
  return (
    <section id='skills'>
       <h5>What Skills I have</h5>
         <h2>My Skills</h2>
    
       <div className = "container skills__container">
        <div className = "skills__content">
          <div className = "skills__title">Languages</div>
           
              <div className='skills__details'> 
                <img src={PythonPic} alt="Python" />
                <small>Python</small>
              </div>

              <div className='skills__details'>
                <img src={JavaPic} alt="Java" />
                <small>Java</small>
              </div>

              <div className='skills__details'>
                <img src={JavaScriptPic} alt="Javascript" /> 
                <small>Javascript</small>
              </div>

              <div className='skills__details'>
                <img src={CPic} alt="C" />
                <small>C</small>
              </div>

              <div className='skills__details'>
                <img src={PHPPic} alt="PHP" />
                <small>PHP</small>
              </div>
              
        </div>
      </div>
    </section>
  )
}

export default Skills