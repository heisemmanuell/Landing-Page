import React from 'react';
import healthcare from '../assets/images/healthcare.svg';

const Healthcare = () => {
  return(
    <div className="hero">
    <section className='left'>
    <img src={healthcare} alt="hero" />
    </section>

    <section className='right'>
    <h1>Leading healthcare providers</h1>
     <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
     <button className='learn more'>Learn More</button>
    </section>

   </div>
  );
};

export default Healthcare;