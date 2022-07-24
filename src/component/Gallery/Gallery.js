import React, { useState, useEffect } from "react";
import GalleryDetail from "./GalleryDetail";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../assets/gallery", false, /\.(png|jpe?g|svg)$/)
      )
    );
    console.log(images);
  }, [images]);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {images?.map((filePath, index) => (
            <GalleryDetail imagePath={filePath} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
