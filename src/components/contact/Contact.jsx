import React, {useRef} from 'react' 
import '../../assets/css/contact.css'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css"
import {MdOutlineMailOutline} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7k1lsac', 'template_2r9kzeo', form.current, 'YW7purqs1ELhflklq');

    e.target.reset();

  };
  return (
    <section id='contact'>

      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
      <path d="M0 0 L50 100 L100 0 Z" fill="#907e91" stroke="#907e91"></path>
      </svg>

      <AnimationOnScroll initiallyVisible={true} delay={1000}animateIn="animate__tada"> 
          <h5>Contact Me</h5>
      </AnimationOnScroll>
    

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h3>josbut.jobs@gmail.com</h3>
            <a href="mailto:josbut@gmail.com" target="_blank" >Send a message</a>
          </article>

          <article className="contact__option">
            <SiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://linkedin.com" target="_blank" >Connect me</a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>  
      <div>
          <a href="#home" className='scroll_up'>Scroll Up</a> 
        </div>
    </section>
  )
}

export default contact