import React from "react";
import './App.css';

const business = {
    image: 'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'The Pizza Shed', 
    address: '242 Lower Main Rd',
    city: 'Cape Town', 
    state: 'Western Cape',
    zipcode: 7935,
    category: 'Italian',
    rating: 4.5,
    reviewCount:90
  }
  function Business() {
    return (
      <div className="business-cont">
        <img  className='business-img' src= {business.image} />
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