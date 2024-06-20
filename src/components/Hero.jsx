import React from 'react';
import hero from '../assets/images/hero.svg';
import './Hero.css';

const Hero = () => {
  return(
    <div className="hero">
     <section className='left'>
      <h1>Virtual healthcare for you</h1>
      <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
      <button>Consult Today</button>
     </section>

     <section className='right'>
     <img src={hero} alt="hero" />
     </section>

    </div>
  );
};

export default Hero;