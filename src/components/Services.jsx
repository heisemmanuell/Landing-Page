import React from 'react';
import './Services.css';

import search from '../assets/images/search.svg';
import pharmacy from '../assets/images/pharmacy.svg';
import consultation from '../assets/images/consultation.svg';
import details from '../assets/images/details.svg';
import emergency from '../assets/images/emergency.svg';
import tracking from '../assets/images/tracking.svg';


const Services = ({ icon, title, description }) => {
  return(
    <div className="services-container">
    <h1 className="services-title">Our services</h1>
    <p className="services-description">
      We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health.
    </p>
    <div className="services-grid">
      <div className="service-card">
        <img src={search} alt="Search doctor" />
        <h3>Search doctor</h3>
        <p>Choose your doctor from thousands of specialist, general, and trusted hospitals.</p>
      </div>
      <div className="service-card">
      <img src={pharmacy} alt="pharmacy" />
        <h3>Online pharmacy</h3>
        <p>Buy your medicines with our mobile application with a simple delivery system.</p>
      </div>
      <div className="service-card">
      <img src={consultation} alt="consultation" />
        <h3>Consultation</h3>
        <p>Free consultation with our trusted doctors and get the best recommendations.</p>
      </div>
      <div className="service-card">
       <img src={details} alt="details" />
        <h3>Details info</h3>
        <p>Free consultation with our trusted doctors and get the best recommendations.</p>
      </div>
      <div className="service-card">
        <img src={emergency} alt="Emergency care" />
        <h3>Emergency care</h3>
        <p>You can get 24/7 urgent care for yourself or your family.</p>
      </div>
      <div className="service-card">
        <img src={tracking} alt="Tracking" />
        <h3>Tracking</h3>
        <p>Track and save your medical history and health data.</p>
      </div>
    </div>
    <button className="learn-more-btn">Learn more</button>
  </div>
);
};

export default Services;