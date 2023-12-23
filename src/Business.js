import React from "react";
import './App.css';

  function Business({business}) {
    return (
      <div className="business-cont">
        <img  className='business-img' src= {business.image} alt={business.name} />
        <h1>{business.name}</h1>
          <div className='info-container'>
            <div className='address'>
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{business.state}</p>
              <p>{business.zipcode}</p>
            </div>
            <div className='rating-reviews'>
                <p>{business.category}</p>
              <p className="rating">{business.rating} stars</p>
              <p className="reviews">{business.reviewCount} reviews <span>&rarr;</span></p>
            </div>
          </div>
      </div>
    )
  };
  export default Business;