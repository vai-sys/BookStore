import React, { useState, useEffect } from 'react';
import Cards from './Cards'; // Assuming Cards component is imported correctly
import { useNavigate } from 'react-router-dom'; // Using useNavigate for navigation
import axios from 'axios'; // Corrected Axios import

const Course = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate();

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

  const handleBackClick = () => {
    navigate('/'); 
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message if data fetching fails
  }

  return (
    <div className='min-w-full min-h-screen '>
      <div className='my-7'>
        <h1 className='text-4xl font-semibold text-black font'>We are delighted to Have you <span className='text-pink-500'>there</span></h1>
        <button className='px-2 py-1 text-2xl text-white bg-pink-500 rounded my-7' onClick={handleBackClick}>Back</button>
      </div>
      <div className='flex flex-wrap items-center justify-between'>
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;


