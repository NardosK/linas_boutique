import React from "react";
import logoImage from "../../assets/images/linaboutique.jpg";
import {
  SiFacebook,
  SiTiktok,
  SiInstagram,
  SiTelegram,
  SiYoutube,
  SiWhatsapp,
} from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-10 body-font">
      <div className="px-5 py-6 md:py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <div className="block md:flex items-center">
            <div className="w-12 h-12 mx-auto">
              <img
                src={logoImage}
                alt="Logo"
                className="h-full w-full text-white rounded-full"
              />
            </div>
            <div className="ml-3 font-serif text-justify text-xl">
              Lina's Boutique
            </div>
          </div>
        </a>
        <p className="text-sm font-serif text-center sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          ©2022 Lina's Boutique. — Powered by
          <a
            href="https://abyssiniaweb.com/"
            className="ml-1 text-yellow-500 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWD Corp.
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3" href="https://fb.me">
            <SiFacebook className="w-6 h-6" />
          </a>
          <a className="ml-3" href="https://tiktok.com">
            <SiTiktok className="w-6 h-6" />
          </a>
          <a className="ml-3" href="https://instagram.com">
            <SiInstagram className="w-6 h-6" />
          </a>
          <a className="ml-3" href="https://t.me">
            <SiTelegram className="w-6 h-6" />
          </a>
          <a className="ml-3" href="https://youtu.be">
            <SiYoutube className="w-6 h-6" />
          </a>
          <a className="ml-3" href="https://wa.me/17032832392">
            <SiWhatsapp className="w-6 h-6" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
