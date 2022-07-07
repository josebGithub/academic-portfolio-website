import React from 'react'
import CV from '../../assets/docs/cv.pdf'


const HContact = () => {
  return (
    <div className='hcontact'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default HContact