import React from 'react';
import logo from '../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  return(
    <div className="header">
      <div className="logo">
      <img src={logo} alt="Logo" />
      <h1 className='logo'>Trafalga</h1>
      </div>
      <div className=''>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Find a doctor</a></li>
          <li><a href="#contact">App</a></li>
          <li><a href="#contact">Testimonial</a></li>
          <li><a href="#contact">About Us</a></li>
        </ul>
      </nav>
        
      </div>
    </div>
  );
};

export default Header;