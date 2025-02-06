import React, { useEffect, useRef, useState } from "react";
import useContentStore from "../store/contentStore";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { photoOriginalUrl } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const ContentSlider = ({ category,list }) => {
  const { contentType } = useContentStore();
  const [content, setContent] = useState();
  const sliderRef = useRef(null);
  const navigate = useNavigate()
  const formatedContentType = contentType == "movie" ? "Movies" : "TV Shows";
  const formatedCateogryName =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);

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

  useEffect(() => {
    if(list){
      console.log(list)
      setContent(list)
      return
    }
    const fetchApi = async () => {
      const res = await axios.get(`/api/v1/${contentType}/${category}`);
      console.log(res);
      setContent(res.data.content);
    };
    fetchApi();
  }, [contentType, category,list]);
  return (
    <>
      <div className=" relative">
        <h2 className="font-bold mb-3">{formatedCateogryName}</h2>
        <div
          className="bg-black/80 mb-10  overflow-x-scroll relative scrollbar-hide flex space-x-4"
          ref={sliderRef}
        >
          {content?.map((item) => {
            return (
              <div key={item.id} className="relative group min-w-[250px]" onClick={() => {
                navigate('/watch/' + item.id)
              }}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={photoOriginalUrl + item.backdrop_path}
                    alt=""
                    className="transition-transform duration-300 delay-0 ease-in-out group-hover:scale-125"
                  />
                </div>
                <p>{item?.original_title || item?.name}</p>
              </div>
            );
          })}

        </div>
          <button
            className="absolute top-1/2  -translate-y-1/2 left-0 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
      </div>
    </>
  );
};

export default ContentSlider;
