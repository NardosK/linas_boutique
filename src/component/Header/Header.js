import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/linaboutique.jpg";

function Header() {
  return (
    <header className="bg-orange-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img
            src={logoImage}
            alt="Logo"
            className="w-12 h-12 text-white rounded-full"
          />
          <span className="ml-3 text-xl">Lina's Boutique</span>
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
