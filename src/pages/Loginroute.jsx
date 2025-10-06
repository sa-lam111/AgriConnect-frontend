import React from 'react';
import { Link } from 'react-router-dom';
export default function Loginroute() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
        <div className='flex flex-col rounded shadow-xl p-15 justify-center items-center bg-white'>
      <h1 className='font-semibold text-[20px]'>Please pick a Login option</h1>
      <div className='flex space-x-5 py-10 mt-10 pb-15'>
      <div className='hover:scale-110 transition-all duration-300'>
        <Link  className='text-[20px] font-semibold py-10 px-5 rounded-lg bg-green-600 hover:bg-green-400 text-white hover:scale-110 transition-all duration-400 cursor-pointer' to="/login">Login as a user</Link>
      </div>
       <div className='hover:scale-110 transition-all duration-300'>
        <Link className='text-[20px] font-semibold py-10 px-5 rounded-lg bg-green-600 hover:bg-green-400 text-white  transition-all duration-400 cursor-pointer' to="/farmerlogin">Login as a farmer</Link>
      </div>
      </div>
       <p>Dont have an account? <Link className='underline text-blue-500' to="/register">Register</Link></p>
    </div>
   
    </div>
  );
}