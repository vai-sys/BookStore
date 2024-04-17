


import React from 'react';
import list from '../../public/list.json'; // Assuming list.json is in the correct location
import Cards from './Cards'; // Assuming Cards component is imported correctly
import { useNavigate } from 'react-router-dom'; // Using useNavigate for navigation

const Course = () => {
  console.log(list);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className='min-h-screen min-w-full '>
      <div className='my-7'>
        <h1 className='text-4xl font-semibold text-black font'>We are delighted to Have you <span className='text-pink-500'>there</span></h1>
        <button className='px-2 py-1 text-2xl text-white bg-pink-500 rounded my-7' onClick={handleBackClick}>Back</button>
      </div>
      <div className='flex justify-between items-center flex-wrap'>
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;

