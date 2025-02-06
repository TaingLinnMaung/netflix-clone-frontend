import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'


const LoginPage = () => {
    const navigate =useNavigate()
 
    const [emailOrUsername,setEmailOrUsername] = useState('')
    const [password,setPassword] = useState('')
    const {login} = useAuthStore()
    const handleLogin = (e) => {
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(emailOrUsername)){
            login({email:emailOrUsername,password})
        }else{

            login({username:emailOrUsername,password})
        }
    }
    
  return (
    <div className='hero-bg h-screen  '>
        <div className='flex flex-col justify-center mx-auto p-6 pt-1 px-0 sm:p-7  '>
            <header className=' mb-3'>
                
                <img onClick={() => {
                    navigate('/')
                }} src="/netflix-logo.png" alt="netflix logo" className='md:w-[150px] w-[100px]' />
                
            </header>

            {/* form */}
            <form className='mx-auto bg-black/60 space-y-5 text-gray-300 p-5 w-full md:w-[450px]' onSubmit={handleLogin}>
            <h2 className='text-3xl font-bold text-center mb-5'>Login</h2>
               
                <div className='w-full '>
                    <label htmlFor='email' className="block mb-2 text-md font-medium ">
                        Email or Username
                    </label>
                    <input id='email' value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} type="text" placeholder='Enter email or username' className='w-full py-3 px-4 bg-slate-900/60 border-gray-700 rounded-md focus:outline-none focus:ring' />
                </div>
                <div className='w-full'>
                    <label htmlFor='password' className="block mb-2 text-md font-medium ">
                        Password
                    </label>
                    <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='******' className='w-full py-3 px-4 bg-slate-900/60 border-gray-700 rounded-md focus:outline-none focus:ring' />
                </div>
                <button type='submit' className='text-center bg-primary hover:bg-primaryHover w-full  py-2 rounded-md  '>
                    Login
                </button>
                <span className='text-gray-400 '>
                    Don't have an account? <span className='font-semibold text-white cursor-pointer' onClick={() => {
                        navigate('/signUp')
                    }}>Sign Up</span>
                </span>
            </form>
        </div>
    </div>
  )
}

export default LoginPage