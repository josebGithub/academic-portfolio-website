import React from 'react'
import '../../assets/css/footer.css'
import '../../assets/css/header.css'
import HSocials from '../header/HSocials'

const Footer = () => {
  return (
    <footer>
      {/*
      <a href="3" className='footer__logo'>Josephine</a>

        <ul className='permalinks'>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Potfolio</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

     */}
      
        <HSocials></HSocials>
        {/*
        <div className="footer__socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><SiLinkedin/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
        </div>
         */}

       
        <div className="footer__copyright">
          <small>&copy; Designed and Built By Josephine But</small>
        </div>
    </footer>
  )
}

export default Footer