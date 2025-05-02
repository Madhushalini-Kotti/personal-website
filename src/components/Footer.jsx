

import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {

    const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
         <p>Copyright ©{year}. All rights reserved.</p>
        </p>

        <div className="footer-icons">
          <a href="https://github.com/Madhushalini-Kotti" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/madhushalinikotti/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

