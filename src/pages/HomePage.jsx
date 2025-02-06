import React, { useEffect } from 'react'
import HomeScreen from "./HomeScreen.jsx"
import AuthScreen from "./AuthScreen.jsx"
import useAuthStore from '../store/authStore.js'

const HomePage = () => {

    const {user} = useAuthStore()
  
    return (
    < >
        {user ? <HomeScreen/> : <AuthScreen/>}
    </>
  )
}

export default HomePage