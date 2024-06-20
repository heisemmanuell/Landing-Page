import React from 'react';
import download from '../assets/images/download.svg';

const Download = () => {
  return(
    <div className="hero">
    <section className='left'>
    <h1>Download our mobile app</h1>
     <p>Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely</p>
     <button className='learn more'>Download</button>
    
    </section>

    <section className='right'>
    <img src={download} alt="hero" />
    </section>

   </div>
  );
};

export default Download;