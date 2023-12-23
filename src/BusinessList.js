import React , {useState} from "react";
import Business from "./Business";

const businesses = [
    {
    image: 'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'The Pizza Shed', 
    address: '242 Lower Main Rd',
    city: 'Cape Town', 
    state: 'Western Cape',
    zipcode: 7935,
    category: 'Italian',
    rating: 4.5,
    reviewCount:90
},
{
image: 'https://static.wixstatic.com/media/885f0c_04490a56ed544b1ba9b9a7e84759f83c~mv2.jpg/v1/fill/w_640,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/885f0c_04490a56ed544b1ba9b9a7e84759f83c~mv2.jpg',
name: 'The South Yeaster', 
address: '4 The Promenade',
city: 'Cape Town', 
state: 'Western Cape',
zipcode: 7935,
category: 'Bakery',
rating: 4.5,
reviewCount:100
},
{
    image: 'https://insideguide.co.za/cape-town/app/uploads/2023/06/vadivelu-restaurant-curry.webp',
    name: 'Vadivelu', 
    address: '151 Kloof St',
    city: 'Cape Town', 
    state: 'Western Cape',
    zipcode: 7935,
    category: 'Indian',
    rating: 5,
    reviewCount:35
    }
];

 function BusinessList() {
return (
    <div className="business-list" >
    {businesses.map((business, index) => (
        <Business key={index} business={business} />
    ))}
    </div>
)

};

export default BusinessList