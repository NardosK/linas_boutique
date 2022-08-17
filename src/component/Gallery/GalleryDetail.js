// import React from "react";
// import Ne from "./Ne"
// function GalleryDetail({ imagePath }) {
//   return (

//     <div className="h-72 md:h-[32rem] lg:h-[40rem] lg:w-1/3 w-full md:w-1/2 p-4">
//       <div className="flex h-full w-full relative">
//         <img
//           alt="gallery"
//           className="absolute w-full h-full rounded-lg object-fill"
//           src={imagePath}
//         />

//       </div>
//     </div>

//   );
// }

// export default GalleryDetail;


import * as React from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CCloseButton } from '@coreui/react'
import CloseIcon from '@mui/icons-material/Close';



function GalleryDetail({ imagePath }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>

      <div

        className="h-72 md:h-[32rem] lg:h-[40rem] lg:w-1/3 w-full md:w-1/2 p-4">
        <div className="flex h-full w-full relative" onClick={handleOpen}>
          <img
            alt="gallery"
            className="w-full h-full rounded-lg object-fill"
            src={imagePath}
          /></div>


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="w-[80vh] h-[80vh] m-auto"
        >

          <div className="w-full h-full">
            <img
              alt="gallery"
              className="h-full w-full rounded-lg object-fill"
              src={imagePath}
            />
          </div>
        </Modal>
      </div ></>
  );
}
export default GalleryDetail;