import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {FaGithubSquare} from 'react-icons/fa'
import {MdMail} from 'react-icons/md'

const HSocials = () => {
  return (
    <div className="header__socials">
         <a href="mailto:josbut.jobs@gmail.com" target="_blank" rel="noreferrer"><MdMail size={25}/></a>
        <a href="linkedin.com/in/josephine-but-85539b82" target="_blank" rel="noreferrer"><SiLinkedin size={20}/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare size={22}/></a>
    </div>
  )
}

export default HSocials