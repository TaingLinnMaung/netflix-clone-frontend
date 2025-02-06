import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
const SignUpPage = () => {
    const {signup} = useAuthStore()
    const {searchParams} = new URL(document.location)
    const paramEmail = searchParams.get("email")
    const navigate =useNavigate()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState(paramEmail || "")
    const [password,setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(username,email,password)
        signup({username,email,password})
    }
    useEffect(() => {
        
    },[])
    
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
            <h2 className='text-3xl font-bold text-center mb-5'>Sign Up</h2>
                <div className='w-full'>
                    <label htmlFor='username' className="block mb-2 text-md font-medium ">
                        Username
                    </label>
                    <input id='username' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' className='w-full py-3 px-4 bg-slate-900/60 border-gray-700 rounded-md focus:outline-none focus:ring' />
                </div>
                <div className='w-full '>
                    <label htmlFor='email' className="block mb-2 text-md font-medium ">
                        Email
                    </label>
                    <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='you@example.com' className='w-full py-3 px-4 bg-slate-900/60 border-gray-700 rounded-md focus:outline-none focus:ring' />
                </div>
                <div className='w-full'>
                    <label htmlFor='password' className="block mb-2 text-md font-medium ">
                        Password
                    </label>
                    <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='******' className='w-full py-3 px-4 bg-slate-900/60 border-gray-700 rounded-md focus:outline-none focus:ring' />
                </div>
                <button type='submit' className='text-center bg-primary hover:bg-primaryHover w-full  py-2 rounded-md  '>
                    Sign Up
                </button>
                <span className='text-gray-400 '>
                    Already a Member? <span className='font-semibold text-white cursor-pointer' onClick={() => {
                        navigate('/login')
                    }}>Login</span>
                </span>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage