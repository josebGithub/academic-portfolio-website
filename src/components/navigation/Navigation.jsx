import React from 'react'
import '../../assets/css/navigation.css'
import {TiHomeOutline} from 'react-icons/ti'
import { TiUser} from 'react-icons/ti'
import {MdWork} from 'react-icons/md'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'

const Navigation = () => {
  return (
    <nav>
      <a href="#"><TiHomeOutline/></a>
      <a href="#about"><TiUser/></a>
      <a href="#experience"><MdWork/></a>
      <a href="#portfolio"><AiOutlineFileSearch/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Navigation