import React from 'react';

//components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';

//design is made for width 550px not responsive
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
};

export default App;