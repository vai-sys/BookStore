import About from './components/About'
import Home from './components/Home'
import React from 'react'
import Course from './components/Course'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>
    },
    {
      path: "/course",
      element: <><Navbar/><Course/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact /></>
    },
    
   
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App

