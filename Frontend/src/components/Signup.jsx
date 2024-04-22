// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import Login from './Login'

// const Signup = () => {
//   return (
//     <div className='flex items-center justify-center mt-10'>
     
//   <div className="modal-box">
//     <h3 className="text-lg font-bold">Signup</h3>
//     <div className='mt-4 space-y-2'>
//     <span className='flex justify-start ml-16 '>Full Name </span>
//         <input type='text' placeholder='Enter your Full Name' className='w-80 rouded ' ></input>
//         <span className='flex justify-start ml-16 '>Email </span>
//         <input type='email' placeholder='Enter Valid Email' className='w-80 rouded ' ></input>
//         <span className='flex justify-start ml-16 '>Password </span>
//         <input type='password' placeholder='Enter Password' className='w-80 rouded ' ></input>
//     </div>
//     <div className='flex justify-around mt-8'>
//         <button className='px-4 py-2 text-white duration-200 bg-pink-500 rounded hover:bg-pink-700'>Signup</button>
//         <p className='mt-2'> registred ? <NavLink onClick={()=>{
//            document.getElementById('my_modal_5').showModal();
//         }} className='text-blue-500 underline cursor-pointer'>Login</NavLink>
//           <Login/>
//           </p>
//     </div>
//      <div className="modal-action"> 
//        <form method="dialog">
      
//           <NavLink to='/' className="btn">Close</NavLink>
//        </form>  
//      </div>  
//   </div>

      
//     </div>
//   )
// }

// export default Signup


import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Additional logic for form submission
  };

  return (
    <div className='flex items-center justify-center mt-10'>
      <div className="modal-box">
        <h3 className="text-lg font-bold">Signup</h3>
        <div className='mt-4 space-y-2'>
          <span className='flex justify-start ml-16'>Full Name </span>
          <input type='text' placeholder='Enter your Full Name' className='p-2 border border-gray-300 rounded w-80 focus:border-pink-500 focus:outline-none' {...register("fullName", { required: "Full Name is required" })} />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}

          <span className='flex justify-start ml-16'>Email </span>
          <input type='email' placeholder='Enter Valid Email' className='p-2 border border-gray-300 rounded w-80 focus:border-pink-500 focus:outline-none' {...register("email", { required: "Valid email is required", pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}

          <span className='flex justify-start ml-16'>Password </span>
          <input type='password' placeholder='Enter Password' className='p-2 border border-gray-300 rounded w-80 focus:border-pink-500 focus:outline-none' {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })} />
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}

        </div>
        <div className='flex justify-around mt-8'>
          <button type="submit" className='px-4 py-2 text-white duration-200 bg-pink-500 rounded hover:bg-pink-700' onClick={handleSubmit(onSubmit)}>Signup</button>
          <p className='mt-2'>
            Already registered?
            <NavLink onClick={()=>{
              document.getElementById('my_modal_5').showModal();
            }} className='text-blue-500 underline cursor-pointer'>Login</NavLink>
          </p>
        </div>
        <div className="modal-action">
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <NavLink to='/' className="btn">Close</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;