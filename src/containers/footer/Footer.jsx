import React from 'react'
import './Footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Step into the Future</h1>
      </div>

      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Pioneer Building, San Francisco</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Location</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer