import React from 'react';
import star from '../assets/star.png';

function Card({img, openSpots, ranking, votes, title, price}) {
  console.log(openSpots);
  return (
    <div className='card'>
      <div className="card-img">
        <div className="availability">{openSpots === 0 ? 'sold out' : 'online'}</div>
        <img src={img} alt="card" />
      </div>
      <div className="card-body">
        <div className="rating">
          <img src={star} alt="star" />
          <span className="rate">{ranking} <span>({votes}) . USA</span></span>
        </div>
        <h3 className="card-title">{title}</h3>
        <h3 className="card-price">From ${price} <span>/ person</span></h3>
      </div>
    </div>
  )
};

export default Card;