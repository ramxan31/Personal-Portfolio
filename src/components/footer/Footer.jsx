import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="http://" className='footer_logo'>RaWebsolution</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="http://facebook.com"><FaFacebookF /></a>
        <a href="http://instagram.com"><FaInstagram /></a>
        <a href="http://twitter.com"><FaTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; RaWebsolution | All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer