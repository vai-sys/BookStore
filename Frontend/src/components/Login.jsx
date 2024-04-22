// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useForm } from "react-hook-form"

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)

 
//   return (
//     <div>
//       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <h3 className="text-lg font-bold">Login</h3>
//           <div className='mt-4 space-y-2'>
//             <span className='flex justify-start ml-16 '>Email </span>
//             <input type='email' id="email" placeholder='Enter Valid Email' className='rounded w-80' {  {...register("exampleRequired", { required: true })} }></input>
//             <span className='flex justify-start ml-16 '>Password </span>
//             <input type='password' id="password" placeholder='Enter Password' className='rounded w-80'></input>
//           </div>
//           <div className='flex justify-around mt-8'>
//             <button className='px-4 py-2 text-white duration-200 bg-pink-500 rounded hover:bg-pink-700'>Login</button>
//             <p className='mt-2'>Not registered? <NavLink to='/signup' className='text-blue-500 underline cursor-pointer'>Signup</NavLink></p>
//           </div>
//           <div className="modal-action">
//             <form onSubmit={()=>{handleSubmit(onsubmit)}} method="dialog">
              
//               <button className="btn">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Login;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
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
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Login</h3>
          <div className='mt-4 space-y-2'>
            <span className='flex justify-start ml-16'>Email </span>
            <input type='email' id="email" placeholder='Enter Valid Email' className='p-2 border border-gray-300 rounded w-80 focus:border-pink-500 focus:outline-none' {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}

            <span className='flex justify-start ml-16'>Password </span>
            <input type='password' id="password" placeholder='Enter Password' className='p-2 border border-gray-300 rounded w-80 focus:border-pink-500 focus:outline-none' {...register("password", { required: "Password is required" })} />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}

          </div>
          <div className='flex justify-around mt-8'>
            <button type="submit" className='px-4 py-2 text-white duration-200 bg-pink-500 rounded hover:bg-pink-700' onClick={handleSubmit(onSubmit)}>Login</button>
            <p className='mt-2'>Not registered? <NavLink to='/signup' className='text-blue-500 underline cursor-pointer'>Signup</NavLink></p>
          </div>
          <div className="modal-action">
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <NavLink to='/' className="btn">Close</NavLink>
          </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
