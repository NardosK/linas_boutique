import React, { useState, useEffect } from "react";

function Banner() {
  let [currentIndex, setIndex] = useState(0);
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [time, setTime] = useState(5);

  useEffect(() => {
    setImage(images[currentIndex]);
  }, [images, currentIndex]);

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../assets/hero", false, /\.(png|jpe?g|svg)$/)
      )
    );
  }, []);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative pb-8 w-full mx-auto"
      data-carousel="static"
    >
      {/* Slider Images */}
      <div className="container mx-auto overflow-hidden relative w-full h-[20rem] md:h-[30rem] lg:h-[38rem]">
        {/* Items */}
        <div
          className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
          data-carousel-item="active"
        >
          <img
            src={image}
            className="block absolute px-1 mx-auto top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="flex absolute bottom-3 left-1/2 z-30 space-x-3 -translate-x-1/2">
        {images.map((image, index) => {
          return (
            <div
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800"
              onClick={(e) => {
                e.preventDefault();
                setImage(image);
              }}
              key={index}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          );
        })}
      </div>
      {/* Slider controls */}
      <div
        id="data-carousel-prev"
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center md:pl-4 h-full"
        data-carousel-prev=""
      >
        <span
          className="inline-flex cursor-pointer justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-slate-400/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          onClick={() => {
            setIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
            setImage(images[currentIndex]);
          }}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </div>
      <div
        id="data-carousel-next"
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center md:pr-4 h-full"
        data-carousel-next=""
      >
        <span
          className="inline-flex cursor-pointer justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-slate-400/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          onClick={() => {
            setIndex(currentIndex + 1 < images.length ? currentIndex + 1 : 0);
            setImage(images[currentIndex]);
          }}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </div>
    </div>
  );
}

export default Banner;
