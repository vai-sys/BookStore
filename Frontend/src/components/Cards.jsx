import React from 'react';

const Cards = ({ item }) => {
   
  return (
    <div>
      <div className="shadow-xl card w-96 bg-base-100 mt-3 mr">
        <figure><img src={item.Image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.Title}
           
          </h2>
          
          <p>{item.name}</p> 
          <div className="flex items-center justify-end my-6 card-actions">
            <div className="px-3 py-3 badge badge-outline">${item.price}</div> 
            <div className="px-3 py-3 text-white bg-pink-500 badge badge-outline">Buy Now</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

