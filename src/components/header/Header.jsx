import React from 'react'
import '../../assets/css/header.css'
import HContact from './HContact'
import MYPICTURE from '../../assets/images/josephineB1.jpg'
import HSocials from './HSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome I'm </h5>
        <h1>Josephine But</h1>
        <h5 className="text-gray">Software Developer</h5>
        <HContact></HContact>
        <HSocials></HSocials>

        <div className='myself'>
          <img src={MYPICTURE} alt="Josephine But"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header