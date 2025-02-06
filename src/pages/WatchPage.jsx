import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useContentStore from "../store/contentStore";
import ReactPlayer from "react-player";
import NavBar from "../components/NavBar";
import { ChevronLeft, ChevronRight, Search, LogOut, Menu } from "lucide-react";
import useAuthStore from "../store/authStore";
import { photoOriginalUrl } from "../utils/helper";
import ContentSlider from "../components/ContentSlider";
const WatchPage = () => {
  const { id } = useParams();
  const { user } = useAuthStore();
  const { contentType } = useContentStore();
  const [trailers, setTrailers] = useState([]);
  const [content, setContent] = useState({});
  const [similar, setSimilar] = useState([]);
  const [trailerIndex, setTrailerIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formatReleaseDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDecreseIndex = () =>{
    if(trailerIndex == 0) return
    setTrailerIndex(trailerIndex -1)
  }
  const handleIncreseIndex = () =>{
    if(trailerIndex == trailers.length -1) return
    setTrailerIndex(trailerIndex +1)
  }
  useEffect(() => {
    // * fetch trailer
    (async () => {
      try {
        console.log("hello", id);
        const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
        setTrailers(res.data.trailers);
      } catch (error) {
        if (error.message.includes("404")) {
          setTrailers({});
        }
      }
    })();

    const fetchDetail = async () => {
      try {
        console.log("hello", id);
        const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
        console.log(res);
        setContent(res.data.content);
      } catch (error) {
        if (error.message.includes("404")) {
          setContent({});
        }
      }
    };
    fetchDetail();
    const fetchSimilar = async () => {
      try {
        console.log("hello", id);
        const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
        console.log(res);
        setSimilar(res.data.similar);
      } catch (error) {
        if (error.message.includes("404")) {
          setSimilar([]);
        }
      }
    };
    fetchSimilar();
  }, [contentType, id]);
  return (
    <>
      <div className=" h-screen bg-black ">
        <div className="absolute w-full z-50">
          <div className=" text-white select-none  flex  mx-auto justify-between px-3 ">
            <img
              src="/netflix-logo.png"
              onClick={() => navigate("/")}
              alt=""
              className="w-28 mr-10"
            />
            <div className="flex-1 space-x-3 mr-5 hidden sm:flex items-center ">
              <span
                className="text-white text-2xl cursor-pointer select-none hover:underline "
                onClick={() => navigate("/history")}
              >
                Search History
              </span>
            </div>
            <div className=" flex items-center space-x-3  ">
              <img src={user?.image} alt="" className="w-6 h-6 rounded-md" />

              <Search onClick={() => navigate("/search")} />
              <LogOut />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center translate-y-16 mb-10 p-4">
          <button className="text-white bg-gray-600 p-2 hover:bg-gray-700" onClick={handleDecreseIndex}>
            <ChevronLeft />
          </button>
          <button className="text-white bg-gray-600 p-2 hover:bg-gray-700 " onClick={handleIncreseIndex}>
            <ChevronRight />
          </button>
        </div>
        <div className="aspect-auto mb-8 p-2 sm:p-10  z-50">
          {trailers.length > 0 && (
            <ReactPlayer
              controls={true}
              width={"100%"}
              height={"70vh"}
              className="mx-auto overflow-hidden rounded-lg"
              url={`https://www.youtube.com/watch?v=${trailers[trailerIndex].key}`}
            />
          )}
        </div>

        <div className="bg-black text-white mt-20 pb-20 ">
          <div className="flex items-center mx-auto w-[80%] gap-40">
            <div className="flex-1">

            <h1 className="text-4xl ">{content?.name || content?.title}</h1>
            <h1 className="text-2xl text-blue-600 my-2 " > {content?.tagline } </h1>
            {formatReleaseDate(
              content?.first_air_date || content?.release_date
            )}
            {content?.adult ? (
              <span className="text-red-600">18 +</span>
            ) : (
              <span className="text-green-600">PG-13</span>
            )}
            <p className="text-2xl mt-2">{content?.overview}</p>
            </div>

            <div className="flex-1 ">
              <img
                src={photoOriginalUrl + content.poster_path}
                alt=""
                className="max-w-[500px]"
              />
            </div>
          </div>
        </div>
        
      {/* separater */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
        <div className="bg-black text-white  py-20">
          <div className="mx-auto w-[80%]">

        <ContentSlider category={'You May Also Like'} list={similar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
