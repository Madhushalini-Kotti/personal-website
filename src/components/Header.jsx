import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="header">
      <div className="logo">Madhushalini Kotti</div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header
