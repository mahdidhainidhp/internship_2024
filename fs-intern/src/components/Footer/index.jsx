import React from "react";
import { Text, Button, Input, Heading, Img } from "./..";
import logo from "../../images/logo_footer.png";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} bg-gradient-to-r from-[#b43a4d] to-[#3f0b19] py-10 px-4 shadow-sm w-full`}
    >
      <div className="max-w-[1920px] mx-auto flex flex-col gap-8 md:gap-6 px-4 lg:px-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Ownership */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <Img src={logo} alt="Footer Logo" className="h-20 w-auto" />
            <Text
              as="p"
              className="text-center text-white opacity-70 lg:text-left"
            >
              This website is property of <br /> The Exclusive.
            </Text>
          </div>

          {/* Quick Access */}
          <div className="flex flex-col gap-6">
            <Heading
              as="h5"
              className="text-white mb-2 text-center lg:text-left"
            >
              Quick Access
            </Heading>
            <ul className="flex flex-col gap-2.5 items-center lg:items-start">
              <li>
                <a href="Home" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="WESA2024" className="text-white hover:underline">
                  WESA2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <Heading
              as="h5"
              className="text-white mb-2 text-center lg:text-left"
            >
              Contact Us
            </Heading>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="text-white hover:underline">
                  Locations
                </a>
              </li>
            </ul>
            <div className="flex flex-col items-center lg:items-start gap-2.5">
              <Text as="p" className="text-white">
                +961 71 123456
              </Text>
              <Text as="p" className="text-white">
                +961 70 123456
              </Text>
            </div>
          </div>

          {/* Follow Us On */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <Heading
              as="h5"
              className="text-white mb-2 text-center lg:text-left"
            >
              Follow Us On
            </Heading>
            <ul className="flex flex-col gap-2.5 items-center lg:items-start">
              <li>
                <a href="Facebook" className="text-white hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="Twitter" className="text-white hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="Instagram" className="text-white hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          <div className="flex flex-col w-full max-w-[400px]">
            <Heading
              as="h5"
              className="text-white mb-2 text-center lg:text-left"
            >
              Subscribe
            </Heading>
            <Input
              shape="round"
              name="Email Input"
              placeholder="Enter Email"
              className="w-full bg-pink-100 border border-gray-300 text-gray-700 rounded-full px-4 py-2"
            />
            <Button
              color="black_900_b2"
              size="sm"
              shape="round"
              className="mt-4 w-full bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white opacity-70 mt-4 pt-4">
          <Text as="p" className="text-center text-white">
            &copy;2024 Innovation Alchemy, All rights reserved
          </Text>
        </div>
      </div>
    </footer>
  );
}
