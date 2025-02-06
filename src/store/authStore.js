import { create } from "zustand";

import axios from "axios";
import toast from "react-hot-toast";

const useAuthStore = create((set) => ({
    user: null,
    isSigningUp:false,
    isLoggingIn:false,
    isCheckingAuth:false,
    isLoggingOut:false,
    login:async (credential) => {
        set({isLoggingIn:true})
        try {
            const  res = await axios.post("/api/v1/auth/login", credential)
            set({isLoggingIn:false,user:res.data.user})
        } catch (error) {
            set({isLoggingIn:false,user:null})
        }
    },
    signup:async (credential) => {
        set({isSigningUp:true})
        try {
            const res =await axios.post("/api/v1/auth/signup",credential)
            console.log(res)
            if(res.data.success){

                toast.success('User Created Successfully')

                set({isSigningUp:false,user:res.data.user})
            }
        } catch (error) {
            toast.error(error.response.data.message)
         
            set({isSigningUp:false,user:null})
           
        }
    },
    logout:async () => {
        set({isLoggingOut:true})
        try {
            const res = await axios.post("/api/v1/auth/logout")
            set({isLoggingOut:false,user:null})
        } catch (error) {
            set({isLoggingOut:false,user:null})
        }
    },
    checkAuth:async () => {
        set({isCheckingAuth:true})
        try {
            const res = await axios.get("/api/v1/auth/authCheck")
            set({user:res.data.user,isCheckingAuth:false})
            console.log(res)
        } catch (error) {
            set({isCheckingAuth:false,user:null})
            
        }
    },
}));

export default useAuthStore;