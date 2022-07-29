import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function GalleryDetail({ imagePath }) {
  return (
    <div className="h-72 md:h-[24rem] lg:h-[30rem] lg:w-1/3 w-full md:w-1/2 p-4">
      <div className="flex h-full w-full relative">
        {imagePath ? (
          <img
            alt="gallery"
            className="absolute w-full h-full rounded-sm object-fill"
            src={imagePath}
          />
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            THE SUBTITLE
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Alper Kamu
          </h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default GalleryDetail;
