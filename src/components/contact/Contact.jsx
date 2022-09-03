import React from 'react'
import '../../assets/css/contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Contact Me</h5>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h3>josbut@gmail.com</h3>
            <a href="mailto:josbut@gmail.com" target="_blank" >Send a message</a>
          </article>

          <article className="contact__option">
            <SiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h3>Connect me</h3>
            <a href="https://linkedin.com" target="_blank" >Connect me</a>
          </article>
        </div>

        {/* Contact Form */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>  
    </section>
  )
}

export default contact