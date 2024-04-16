import React from 'react'
import list from '../../public/list.json'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards'


const Freebook = () => {
    const filteredData = list.filter(data => data.category === "free");
    console.log(filteredData);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>
    <div className='flex my-18'>
        <div className='flex items-center justify-start mx-8 my-9'>
        <h1 className='text-2xl font-semibold text-black'>Free Offered Books</h1>
     
        </div>
     
    
    </div>
    <div>
    <Slider {...settings}>
     {filteredData.map((item)=>(<Cards item={item} key={item.id}/>))}
    </Slider>
    </div>
    </>
  )
}

export default Freebook
