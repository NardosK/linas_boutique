import React from "react";
import logoImage from "../../assets/images/linaboutique.jpg";
import { SiFacebook, SiTiktok, SiInstagram, SiTelegram } from "react-icons/si";

function Footer() {
  return (
    <footer className=" bg-orange-300 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <img
            src={logoImage}
            alt="Logo"
            className="w-12 h-12 text-white rounded-full"
          />
          <span className="ml-3 text-xl">Lina's Boutique</span>
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2022 Lina's Boutique. — Powered by
          <a
            href="https://abyssiniaweb.com/"
            className="ml-1 text-blue-700 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWD Corp.
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3" href="/">
            <SiFacebook className="w-6 h-6" />
          </a>
          <a className="ml-3" href="/">
            <SiTiktok className="w-6 h-6" />
          </a>
          <a className="ml-3" href="/">
            <SiInstagram className="w-6 h-6" />
          </a>
          <a className="ml-3" href="/">
            <SiTelegram className="w-6 h-6" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
