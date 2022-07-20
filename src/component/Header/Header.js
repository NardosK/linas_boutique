import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/linaboutique.jpg";

function Header() {
  return (
    <header className="bg-orange-300 body-font px-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="block text-center md:text-left md:flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <div className="w-12 h-12 justify-center md:justify-start mx-auto md:mx-0">
            <img
              src={logoImage}
              alt="Logo"
              className="w-full h-full text-white rounded-full"
            />
          </div>
          <div className="justify-center md:justify-start">
            <div className="ml-3 text-xl font-serif">LINA'S BOUTIQUE</div>
            <div className="ml-3 font-sans">
              All Traditional Islamic Wear for Women
            </div>
          </div>
        </a>
        <nav className="md:ml-auto flex flex-wrap text-lg items-center justify-center">
          <a href="/" className="mr-5 hover:text-white">
            Home
          </a>
          <a href="/gallery" className="mr-5 hover:text-white">
            Gallery
          </a>
          <a href="/contact" className="mr-5 hover:text-white">
            Contact
          </a>
          <a href="/about" className="mr-5 hover:text-white">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
