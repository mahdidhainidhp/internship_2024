import React from "react";
import { Button, Text, Img } from "./..";
import logo from "../../images/logo.png";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-[18px] bg-white-a700 shadow-sm`}
    >
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
        <Img
          // src="../images/logo.png"
          src={logo}
          alt="Header Logo"
          className="h-[44px] w-[176px] object-contain"
        />
        <ul className="flex flex-wrap gap-10">
          <li>
            <a href="#">
              <Text as="p" className="!text-black-900">
                Home
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Text as="p" className="hover:text-black-900">
                Programs & Initiatives
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Text as="p" className="hover:text-black-900">
                Get Involved
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Text as="p" className="hover:text-black-900">
                Discover her
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Text as="p" className="hover:text-black-900">
                Contact Us
              </Text>
            </a>
          </li>
        </ul>
        <Button
          size="xs"
          shape="round"
          className="min-w-[112px] border border-solid border-pink-800 font-semibold"
        >
          Login
        </Button>
      </div>
    </header>
  );
}
