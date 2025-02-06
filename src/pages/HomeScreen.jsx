import React, { useRef, useState } from "react";
import useAuthStore from "../store/authStore";
import NavBar from "../components/NavBar";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";

import useGetTrendingContent from "../hooks/useGetTrendinContent";
import ContentSlider from "../components/ContentSlider.jsx";
import {
  MOVIE_CATEGORIES,
  photoOriginalUrl,
  TV_CATEGORIES,
} from "../utils/helper";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactLoading from "react-loading";
import useContentStore from "../store/contentStore";
const HomeScreen = () => {
  const { logout, user } = useAuthStore();
  const { content, contentList,setContent } = useGetTrendingContent();
  const { contentType } = useContentStore();
  const [loadImg, setLoadImg] = useState(false);
  const navigate = useNavigate();
  const sliderRef = useRef();

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  if (!content) {
    return (
      <div className="h-screen text-white relative">
        <NavBar />
        <div className="absolute bg-black/90 top-0 left-0 h-screen w-screen flex justify-center items-center">
          <ReactLoading
            className=""
            type={"spinningBubbles"}
            color={"#f00"}
            height={100}
            width={55}
          />
        </div>
        {/* <div className="absolute top-0 left-0 h-full w-full bg-black/60 flex items-center justify-center shimmer"></div> */}
      </div>
    );
  }
  return (
    <>
      <div className=" h-screen relative pt-3">
        <NavBar />
        {!loadImg && (
          <div className="absolute top-0 left-0 h-full w-full bg-black/60 flex items-center justify-center shimmer"></div>
        )}
        <img
          src={photoOriginalUrl + content?.backdrop_path}
          alt=""
          className="absolute hidden sm:block top-0 w-full h-full left-0 object-cover  -z-50 transition-all duration-200 delay-0 ease-in-out"
          onLoad={() => {
            setLoadImg(true);
          }}
        />
        <img
          src={photoOriginalUrl + content?.poster_path}
          alt=""
          className="absolute sm:hidden top-0 w-full h-full left-0 object-cover -z-50"
        />
        <div
          className="aboslute top-0 left-0 -z-50 h-full w-full  bg-black/50  "
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 ">
          <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-6xl font-extrabold text-white text-balance">
              {content?.original_title || content?.name}{" "}
            </h1>
            <p className="text-white mt-2">
              {" "}
              {content?.first_air_date || content?.release_date} |{" "}
              {content?.adult ? "18+" : "PG-13"}{" "}
            </p>
            <p className="text-white text-2xl mt-2">
              {content?.overview?.length > 200
                ? content?.overview?.slice(0, 200) + "..."
                : content?.overview}
            </p>
            <div className="flex mt-2 space-x-3">
              <button
                className="bg-sky-700 hover:bg-sky-800 py-2 px-3 text-white rounded-md flex "
                onClick={() => {
                  navigate("/watch/" + content.id);
                }}
              >
                {" "}
                <Play />
                &nbsp; Play
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 py-2 px-3 text-white rounded-md flex">
                <Info /> &nbsp; More
              </button>
            </div>
          </div>
          

       
        </div>
      </div>

      {/* separater */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* slider section */}
      <div className="bg-black text-white px-10 md:px-20 pt-20">
        {contentType === "movie"
          ? MOVIE_CATEGORIES.map((item) => {
              return <ContentSlider category={item} key={item} />;
            })
          : TV_CATEGORIES.map((item) => {
              return <ContentSlider category={item} key={item} />;
            })}
      </div>
    </>
  );
};

export default HomeScreen;
