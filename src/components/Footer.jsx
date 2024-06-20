import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <div className="footer">
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h2 className="footer-logo">T</h2>
        <h3>Trafalgar</h3>
        <p>
          Trafalgar provides progressive, and affordable healthcare,
          accessible on mobile and online for everyone
        </p>
        <p>&copy;Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Find a doctor</a></li>
          <li><a href="#">Apps</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Region</h4>
        <ul>
          <li><a href="#">Indonesia</a></li>
          <li><a href="#">Singapore</a></li>
          <li><a href="#">Hongkong</a></li>
          <li><a href="#">Canada</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Help</h4>
        <ul>
          <li><a href="#">Help center</a></li>
          <li><a href="#">Contact support</a></li>
          <li><a href="#">Instructions</a></li>
          <li><a href="#">How it works</a></li>
        </ul>
      </div>
    </div>
  </footer>

    </div>
  );
};

export default Footer;