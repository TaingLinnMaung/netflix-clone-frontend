import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
const Sections = () => {
  return (
    <>
      {/* separater */}
        <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
    <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          {/* Left side */}
          <ScrollAnimation animateIn=" fadeInLeft" animateOnce={true}>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Enjoy on your TV
              </h2>
              <p className="text-lg md:text-xl">
                Watch on Smart TVs, PlayStation, Xbox,{" "}
                <span className="underline">Chromecast</span>, Apple TV, Blu-ray
                players, and more.
              </p>
            </div>
          </ScrollAnimation>
          {/* Right side */}
          <ScrollAnimation
            animateIn=" fadeInRight"
            duration={1.5}
            animateOnce={true}
          >
            <div className="flex-1 relative">
              <img
                src="/tv.png"
                alt="TV image"
                className="mt-4 z-20 relative"
              />
              <video
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
                playsInline
                autoPlay={true}
                muted
                loop
              >
                <source src="/hero-vid.m4v" type="video/mp4" />
              </video>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* separater */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* second section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          {/* Left side */}
          <ScrollAnimation
            animateIn=" fadeInLeft"
            animateOnce={true}
            duration={1.5}
          >
            <div className="flex-1 relative">
              <img src="/stranger-things-lg.png" alt="" />
              <div className="absolute border border-slate-500 flex items-center  gap-1 w-3/4 md:w-1/2 h-20 md:h-24 left-1/2 -translate-x-1/2 bottom-5 bg-black text-white">
                <img
                  src="/stranger-things-sm.png"
                  alt=""
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg ">Stranger Thing</span>
                    <span className="text-sm text-blue-400 ">Download</span>
                  </div>
                  <img
                    src="/download-icon.gif"
                    alt=""
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right side */}
          <ScrollAnimation animateIn=" fadeInRight" animateOnce={true}>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Download your shows to watch offline
              </h2>
              <p className="text-lg md:text-xl">
                save your favourites easily and always have something to watch
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* separater */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* third section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          {/* Left side */}
          <ScrollAnimation animateIn=" fadeInLeft" animateOnce={true}>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Watch everywhere
              </h2>
              <p className="text-lg md:text-xl">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV
              </p>
            </div>
          </ScrollAnimation>
          {/* Right side */}
          <ScrollAnimation
            animateIn=" fadeInRight"
            duration={1.5}
            animateOnce={true}
          >
            <div className="flex-1 relative">
              <img
                src="/device-pile.png"
                alt="TV image"
                className="mt-4 z-20 relative"
              />
              <video
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40%] md:h-[43%] z-10 "
                playsInline
                autoPlay={true}
                muted
                loop
              >
                <source src="/video-devices.m4v" type="video/mp4" />
              </video>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* separater */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* fourth section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          {/* Left side */}
          <ScrollAnimation
            animateIn="fadeInLeft"
            duration={1.5}
            animateOnce={true}
          >
            <div className="flex-1 relative">
              <img src="/kids.png" alt="" />
            </div>
          </ScrollAnimation>

          {/* Right side */}
          <ScrollAnimation animateIn=" fadeInRight" animateOnce={true}>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Create profiles for kids
              </h2>
              <p className="text-lg md:text-xl">
                Send kids on adventures with their favorite characters in a
                space made just for them-free with your membership.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* separater */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
    </>
  )
}

export default Sections