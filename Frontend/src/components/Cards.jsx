import React from 'react';

const Cards = ({ item }) => {
    console.log(item);
  return (
    <div>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure><img src={item.Image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.Title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.name}</p> 
          <div className="justify-end card-actions">
            <div className="badge badge-outline">{item.category}</div> 
            <div className="badge badge-outline">{item.price}</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

