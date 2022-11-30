import React from 'react'
import '../../assets/css/navigation.css'
import {TiHomeOutline} from 'react-icons/ti'
import { TiUser} from 'react-icons/ti'
import {MdWork} from 'react-icons/md'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'
import{useState} from 'react'
import {TbTools} from 'react-icons/tb'


const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} classname={activeNav === '#home' ? 'active' : ''} title="Home"><TiHomeOutline/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} classname={activeNav === '#about' ? 'active' : ''} title="About"><TiUser/></a>

      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} classname={activeNav === '#portfolio' ? 'active' : ''}title="Portfolio"><AiOutlineFileSearch/></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')} classname={activeNav === '#experience' ? 'active' : ''} title="Experience"><MdWork/></a>

      <a href="#skills" onClick={() => setActiveNav('#skills')} classname={activeNav === '#skills' ? 'active' : ''} title="Skills"><TbTools/></a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} classname={activeNav === '#contact' ? 'active' : ''} title="Contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Navigation