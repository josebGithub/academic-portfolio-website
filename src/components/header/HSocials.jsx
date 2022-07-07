import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {FaGithubSquare} from 'react-icons/fa'

const HSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><SiLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
    </div>
  )
}

export default HSocials