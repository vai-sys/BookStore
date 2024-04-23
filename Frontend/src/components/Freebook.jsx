
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards'
import axios from 'axios';
import { useState,useEffect } from 'react';


const Freebook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling


  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
        setLoading(false); // Data fetching is complete
      } catch(err) {
        console.error("Error fetching data:", err);
        setError(err); // Set error state
        setLoading(false); // Data fetching failed
      }
    };

    getBook(); // Call getBook function to fetch data when component mounts
  }, []);
    const filteredData = book.filter(data => data.category === "free");
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
