import React from 'react';
import cards from '../assets/group.png';

function Hero() {
  return (
    <div className='hero'>
      <div className="image">
        <img src={cards} alt="" />
      </div>
      <div className="info">
        <h2 className='experience'>Online Experiences</h2>
        <p className="slogan">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
};

export default Hero;