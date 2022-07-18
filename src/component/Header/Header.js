import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/linaboutique.jpg";

function Header() {
  return (
    <div className="flex justify-between bg-orange-300 px-16">
      <div className="w-[30%] hover:cursor-pointer py-2">
        <img src={logoImage} alt="Lina" className="w-16 h-16" />
      </div>
      <ul className="flex justify-center w-[50%] my-auto ">
        <li className="text-center w-[20%]  border-r-[1px] px-2 border-black">
          <a href="/">Home</a>
        </li>
        <li className="text-center w-[20%] border-r-[1px] px-2 border-black">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="text-center w-[20%]  border-r-[1px] px-2 border-black">
          <a href="/contact">Contact</a>
        </li>
        <li className="text-center w-[20%]  border-r-[1px] px-2 border-black">
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
