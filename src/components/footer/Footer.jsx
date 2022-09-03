import React from 'react'
import '../../assets/css/footer.css'
import {SiLinkedin} from 'react-icons/si'
import {FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="3" className='footer__logo'>Josephine</a>

        <ul className='permalinks'>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Potfolio</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><SiLinkedin/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Josephine But Website. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer