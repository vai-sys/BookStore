


import React from 'react';
import Freebook from './Freebook'

const Home = () => {
  return (
    <>
    <div className='container flex gap-16 px-6 py-6 mx-auto max-w-screen-2xl'>
      {/* left section */}
      <div className='flex flex-col justify-center w-1/2 gap-6'>
       <div>
       <h2 className='py-3 text-4xl font-bold leading-9'>Hello, Welcome here to learn something <span className='py-3 text-4xl font-bold text-pink-600'>new everyday!</span></h2>
       </div>
        {/* <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde tempore animi!</p> */}

        {/* <div className=''>
          <label className="flex items-center gap-2 py-6 input input-bordered">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div> */}
        <div className='flex justify-start py-5 mx-16'>
          <button className="btn btn-active btn-secondary">Secondary</button>
        </div>
      </div>
      {/* right section */}
      <div className='w-1/3 '>
        <img src='../book.jpg' className='w-full h-auto px-6 py-6'></img>
      </div>
    </div>
    <hr></hr>
    <Freebook/>
    </>
    
  );
};

export default Home;
