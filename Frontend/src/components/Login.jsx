import React from 'react'

const Login = () => {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span className=' flex justify-start ml-16'>Email </span>
        <input type='email' placeholder='Enter Valid Email' className='w-80 rouded ' ></input>
        <span className=' flex justify-start ml-16'>Password </span>
        <input type='password' placeholder='Enter Password' className='w-80 rouded ' ></input>
    </div>
    <div className='flex justify-around mt-8'>
        <button className='bg-pink-500 py-2 px-4 rounded text-white hover:bg-pink-700 duration-200'>Login</button>
        <p className='mt-2'>Not registred ? <span className='underline text-blue-500 cursor-pointer'>Signup</span></p>
    </div>
     <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
         <button className="btn">Close</button>
      </form>
    </div> 
  </div>
</dialog>
      
    </div>
  )
}

export default Login
