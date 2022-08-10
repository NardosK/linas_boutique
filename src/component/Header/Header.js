import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="w-full text-black body-font md:px-10">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="block text-center md:text-left md:flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <div className="h-16 w-16 md:w-12 md:h-12 justify-center md:justify-start mb-4 md:mb-0 mx-auto md:mx-0">
            <img
              src={logoImage}
              alt="Logo"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="justify-center md:justify-start">
            <div className="md:ml-3 text-3xl font-medium md:text-xl font-serif">
              <span>LINA'S BOUTIQUE</span>
            </div>
            <div className="md:ml-3 text-xs font-sans">
              All Traditional Islamic Wear for Women
            </div>
          </div>
        </a>
        <nav className="md:ml-auto flex flex-wrap text-lg font-medium items-center justify-center">
          <a href="/" className="mx-5 hover:text-indigo-600">
            Home
          </a>
          <a href="/gallery" className="mr-5 hover:text-indigo-600">
            Gallery
          </a>
          <a href="/contact" className="mr-5 hover:text-indigo-600">
            Contact
          </a>
          <a href="/about" className="mr-5 hover:text-indigo-600">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
