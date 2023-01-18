import React from 'react';
import Card from './Card';
import cards from '../data';

function Cards() {
  return (
    <div className='cards'>
      {cards.map((card,index) => (
        <Card key={index}
        img={card.img}
        openSpots={card.openSpots}
        ranking={card.ranking}
        votes={card.votes}
        title={card.title}
        price={card.price}/>
      ))}
    </div>
  )
};

export default Cards;