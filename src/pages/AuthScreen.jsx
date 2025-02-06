import React, { useState } from "react";
import { ChevronRight, Section } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sections from "../components/Sections";


const AuthScreen = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState()
  return (
    <>
      <div className="hero-bg h-screen">
        <div className="flex flex-col justify-center mx-auto p-6 pt-1 px-0 sm:p-7  ">
          <header className=" mb-3 flex justify-between mx-auto w-3/4">
            <img
              onClick={() => {
                navigate("/");
              }}
              src="/netflix-logo.png"
              alt="netflix logo"
              className="md:w-[150px] w-[100px]"
            />
            <button
              className="cursor-pointer inline-block text-white font-semibold text-1xl px-3
                 bg-primary hover:bg-primaryHover rounded-md"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
          </header>

          <div className="mt-24 text-white text-center">
            <h1 className=" font-bold  text-5xl px-4  mx-auto  w-full md:w-1/2 xl:text-7xl ">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="mt-10 font-semibold">
              Starts at USD 2.99. Cancel anytime.
            </p>
            <p className="mt-10  ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className=" space-x-2  md:w-1/2 mx-auto mt-3">
              <input
                type="text "
                className=" py-3 px-3 w-2/3 bg-black/80 focus:outline-white outline-transparent "
                placeholder="Email address"
                
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                onKeyDownCapture={(e) => {
                    if(e.code == "Enter"){
                        navigate("/signup?email=" +email )
                    }
                }}
              />
              <button onClick={() => {
                navigate("/signup?email=" +email )
              }} className="  bg-primary hover:bg-primaryHover rounded-md py-3 px-3 ">
                Get Start <ChevronRight className="inline-block" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
           
    
    <Sections/>

    </>
  );
};

export default AuthScreen;
