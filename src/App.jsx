import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import "animate.css/animate.compat.css"
import { Toaster } from 'react-hot-toast';
import useAuthStore from './store/authStore.js';
import WatchPage from "./pages/WatchPage.jsx"
import HistoryPage from "./pages/HistoryPage.jsx"
import SearchPage from "./pages/SearchPage.jsx"
import NotFound from "./pages/NotFound.jsx"

function App() {
  const {user,checkAuth} = useAuthStore()
  useEffect(() => {
      checkAuth()
  },[])
 
  console.log('auth userr is here',user)
  
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <Navigate to="/" replace /> },
    // {
    //   path: "dashboard",
    //   children: [{ path: "*", element: <Dashboard /> }],
    // },
    { path: "/signUp", element:user?<Navigate to="/" replace />: <SignUpPage /> },
    { path: "/login", element:user?<Navigate to="/" replace />: <LoginPage /> },
    { path: "/watch/:id", element: <WatchPage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return (
    <>
     
     <RouterProvider router={router} />
     <Toaster />
    </>
  )
}

export default App
