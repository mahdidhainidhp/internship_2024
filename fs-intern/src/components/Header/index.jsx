import React, { useState } from "react";
import { Button, Text, Img } from "./..";
import logo from "../../images/logo.png";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      {...props}
      className={`flex justify-between items-center py-4 bg-white shadow-sm px-5 ${props.className}`}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <Img src={logo} alt="Header Logo" className="h-12 w-auto object-contain" />
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:gap-10 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-5 md:p-0 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 md:items-center">
          <li>
            <a href="#" className="text-base hover:text-black">
              <Text as="p">Home</Text>
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:text-black">
              <Text as="p">Programs & Initiatives</Text>
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:text-black">
              <Text as="p">Get Involved</Text>
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:text-black">
              <Text as="p">Discover Her</Text>
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:text-black">
              <Text as="p">Contact Us</Text>
            </a>
          </li>
        </ul>
        <Button
          size="xs"
          shape="round"
          className="min-w-[112px] border border-solid border-pink-800 font-semibold mt-4 md:mt-0"
        >
          Login
        </Button>
      </nav>
    </header>
  );
}

