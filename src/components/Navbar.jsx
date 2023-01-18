import React from 'react';
import Logo from '../assets/airbnb.png';

function Navbar() {
  return (
    <div className='navbar'>
        <img src={Logo} alt="airbnb logo" />
    </div>
  )
};

export default Navbar;