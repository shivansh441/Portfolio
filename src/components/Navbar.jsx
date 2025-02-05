import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../index.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-circle">SO</span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="navbar-hamburger" onClick={handleHamburgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Social Media Links */}
      <div className="navbar-social">
        <a href="https://www.linkedin.com/in/shivansh-ojha-390417235/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/shivansh441" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/its_avyay_here/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://wa.me/7081934353?text=Hello%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
