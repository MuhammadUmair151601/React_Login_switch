import React, { useState } from 'react'

const LoginAuth = () => {
  const [isLogin, setisLogin] = useState("")
  return (
    <div className=''>
      <div className='bg-white w-100 rounded-2xl'>
        <div className='login-toggle flex justify-center items-center'>
          <button className={isLogin ? "active" : " "} onClick={()=>setisLogin(true)}>Login</button>
          <button className={!isLogin ? "active" : " "}onClick={()=>setisLogin(false)}>SignUp</button>
        </div>
        {isLogin ? <>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-xl font-semibold mt-7'>Login Form</h2>
          <input className='bg-gray-500 w-70 px-5 text-white rounded-[5px] py-2 mt-4' type="email" placeholder='Email' />
          <input className='bg-gray-500 w-70 px-5 text-white rounded-[5px] py-2 mt-4' type="password" placeholder='Password' />
          <a className='mt-3' href="#">Forgot Password?</a>
          <button className='bg-blue-950 w-30 text-white font-bold text-xl rounded-[7px] py-1 mt-3 cursor-pointer' type='submit'>Login</button>
          <div className='flex gap-10 mt-5 mb-10'>
             <p>Not a member?</p>
          <a href="#" onClick={()=> setisLogin(false)}>Signup</a>
          </div>
         
          </div>
          </>: <>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl font-semibold mt-7'>SignUP Form</h2>
          <input className='bg-gray-500 w-70 px-5 text-white rounded-[5px] py-2 mt-4' type="email" placeholder='Email' />
          <input className='bg-gray-500 w-70 px-5 text-white rounded-[5px] py-2 mt-4' type="password" placeholder='Password' />
          <input className='bg-gray-500 w-70 px-5 text-white rounded-[5px] py-2 mt-4' type="password" placeholder='Confirm Password' />
          <button className='bg-blue-950 w-30 text-white font-bold text-xl rounded-[7px] py-1 mt-3 cursor-pointer mb-16' type='submit'>SignUp</button>
          </div>
          </>}
      </div>
    </div>
  )
}

export default LoginAuth