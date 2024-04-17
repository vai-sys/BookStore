import About from './components/About'
import Home from './components/Home'
import React from 'react'
import Course from './components/Course'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /><Footer/></>
    },
    {
      path: "/course",
      element: <><Navbar/><Course/><Footer/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About /><Footer/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact /><Footer/></>
    },
    
   
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App

