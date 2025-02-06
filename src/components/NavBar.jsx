import React, { useState } from 'react'
import useAuthStore from '../store/authStore'
import { LogOut,Menu,Search } from 'lucide-react'
import useContentStore from '../store/contentStore'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
    const {user,logout} = useAuthStore()
    const navigate = useNavigate()
    const {setContentType} = useContentStore()
    const [toggleMobileMenu, setToggalMobileMenu] = useState(false)
  return (
    <>
    <div className='absolute w-full z-50'>

    <div className=' text-white select-none  flex  mx-auto justify-between px-3 '>
        <img src="/netflix-logo.png" onClick={() => navigate('/')} alt="" className='w-28 mr-10' />
        <div className='flex-1 space-x-3 mr-5 hidden sm:flex items-center '>
            <span  className='text-white text-2xl cursor-pointer select-none hover:underline' onClick={() => {
                setContentType('movie')
            }}>Movie</span>
            <span  className='text-white text-2xl cursor-pointer select-none hover:underline ' onClick={() => {
                setContentType('tv')
            }}>TV</span>
            <span  className='text-white text-2xl cursor-pointer select-none hover:underline ' onClick={() => navigate('/history')}>Search History</span>
           
        </div>
        <div className=' flex items-center space-x-3  '>
         

            <img src={user.image} alt="" className='w-6 h-6 rounded-md' />
            
            <Search  onClick={() => navigate('/search')}/>
            <LogOut onClick={logout} />
            <Menu onClick={() => setToggalMobileMenu(!toggleMobileMenu)} className='inline-block sm:hidden' />
        </div>
    </div>
    {toggleMobileMenu && ( <div className='bg-black/60 z-30 flex flex-col select-none  mx-auto sm:hidden  text-white'>
            <span className='px-2 pt-1 cursor-pointer hover:underline' onClick={() => {
                setContentType('movie')
            }}>Movie</span>
            <span className='px-2 pt-1 cursor-pointer hover:underline' onClick={() => {
                setContentType('tv')
            }}>TV</span>
            <span className='px-2 py-1 cursor-pointer hover:underline' onClick={() => navigate('/history')}>Search History</span>
          
        </div>)}
    </div>
       
    </>
  )
}

export default NavBar