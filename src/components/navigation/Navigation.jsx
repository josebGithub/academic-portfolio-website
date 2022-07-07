import React from 'react'
import '../../assets/css/navigation.css'
import {TiHomeOutline} from 'react-icons/ti'
import { TiUser} from 'react-icons/ti'
import {MdWork} from 'react-icons/md'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'
import{useState} from 'react'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} classname={activeNav === '#' ? 'active' : ''}><TiHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} classname={activeNav === '#about' ? 'active' : ''}><TiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} classname={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} classname={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFileSearch/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} classname={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Navigation