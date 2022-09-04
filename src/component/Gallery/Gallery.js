import React, { useState, useEffect } from "react";
import GalleryDetail from "./GalleryDetail";
import TablePagination from "@mui/material/TablePagination";

function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../assets/gallery", false, /\.(png|jpe?g|svg)$/)
      )
    );
  }, [images]);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Some of our best products
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are few of our best sold products.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {images?.map((filePath, index) => (
            <GalleryDetail imagePath={filePath} key={index} />
          ))}
        </div>
        <div className="border-black border-2">
          <TablePagination
            component="div"
            count={images?.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </section>
  );
}

// function PatternUp(int N)
// {
//   int num=1;
//   int count= Int.parseInt(N/4) +1;
//   for(int i=0; i < count; i++ ){
//     if(num = 1 ){
//       num+=3;
//     }
//     else
//     {
//       num+=4;
//     }
//     Print(num);
//   }
// }

export default Gallery;
