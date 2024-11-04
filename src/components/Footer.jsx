import React from 'react';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from 'react-icons/io5';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href='#home' className='footer-link'>
            Home
          </a>
          <a href='#about' className='footer-link'>
            About
          </a>
          <a href='#services' className='footer-link'>
            Services
          </a>
          <a href='#contact' className='footer-link'>
            Contact
          </a>
        </div>
        <div className='footer-socials'>
          <a href='https://facebook.com' className='footer-social-link'>
            <IoLogoFacebook size={20} />
          </a>
          <a href='https://twitter.com' className='footer-social-link'>
            <IoLogoTwitter size={20} />
          </a>
          <a href='https://instagram.com' className='footer-social-link'>
            <IoLogoInstagram size={20} />
          </a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
