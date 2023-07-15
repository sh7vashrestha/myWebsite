import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { BsPersonLinesFill } from "react-icons/bs";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handelClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#1E1E1E] text-[#f4f4f4]">
      <div>
        <span>
          <img
            className="hover:animate-[pulse_2s_ease-in-out_infinite]  cursor-pointer"
            src="./assets/logo.png"
            alt="Logo"
            style={{ width: "60px", zIndex: "12", position: "relative" }}
          />
        </span>
      </div>
      {/* Menu */}

      <ul className="hidden sm:flex">
        <li className="sm:px-4 md:px-6">Home</li>
        <li className="sm:px-4 md:px-6">About</li>
        <li className="sm:px-4 md:px-6">My Skills</li>
        <li className="sm:px-4 md:px-6">Projects</li>
        <li className="sm:px-4 md:px-6">Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handelClick} className="sm:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1E1E1E] flex flex-col justify-center items-center"
        }>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">My Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className={!nav?"hidden sm:flex fixed flex-col top-[35%] left-0": "flex fixed flex-col top-[35%] left-0"}>
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href="https://www.linkedin.com/in/sh7va/"
              target="_blank"
              rel="noreferrer">
              LinkedIn
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F2]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href="https://twitter.com/Shivashrestha92"
              target="_blank"
              rel="noreferrer">
              Twitter
              <FaTwitter size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href="https://github.com/sh7vashrestha"
              target="_blank"
              rel="noreferrer">
              GitHub
              <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b99566]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href="/"
              target="_blank"
              rel="noreferrer">
              Resume
              <BsPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
