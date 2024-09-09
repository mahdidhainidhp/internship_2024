import React from "react";
import { Text, Button, Input, Heading, Img } from "./..";
import logo from "../../images/logo.png";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex items-center p-[22px] sm:p-5 bg-gradient2 shadow-sm`}
    >
      <div className="mx-auto mb-2 flex w-full max-w-[1210px] flex-col gap-8">
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <div className="flex flex-col items-center gap-14 sm:gap-7">
            <Img
              // src="../images/logo.png"
              src={logo}
              alt="Footer Logo"
              className="h-[86px] w-[334px] object-contain"
            />
            <Text as="p" className="!text-white-a700_7f">
              <span>This websie is property of</span>
              <span>The Exclusive.</span>
            </Text>
          </div>
          <div className="flex w-[8%] flex-col items-center gap-2.5 self-center md:w-full">
            <Heading as="h5" className="!text-white-a700">
              Quick Access
            </Heading>
            <ul className="!mr-1 flex flex-col items-start gap-2.5 self-stretch md:mr-0">
              <li>
                <a href="Home" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-white-a700_d8">
                    Home
                  </Text>
                </a>
              </li>
              <li>
                <a href="WESA2024" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-white-a700_d8">
                    WESA2024
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="!text-white-a700_d8">
                    Get Involved
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="!text-white-a700_d8">
                    Contact Us
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-[10%] items-center justify-center md:w-full">
            <ul className="flex flex-col items-start gap-2.5">
              <li>
                <a href="#">
                  <Heading as="h5" className="!text-white-a700">
                    Contact Us
                  </Heading>
                </a>
              </li>
              <li>
                <a href="Locations" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-white-a700_d8">
                    Locations
                  </Text>
                </a>
              </li>
            </ul>
            <div className="relative ml-[-94px] flex flex-1 flex-col items-center gap-2.5">
              <Text as="p" className="!text-white-a700_d8">
                +961 71 123456
              </Text>
              <Text as="p" className="!text-white-a700_d8">
                +961 70 123456
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <Heading as="h5" className="!text-white-a700">
              Follow us On
            </Heading>
            <ul className="flex flex-col items-start gap-2.5">
              <li>
                <a href="Facebook" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-white-a700_d8">
                    Facebook
                  </Text>
                </a>
              </li>
              <li>
                <a href="Twitter" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-white-a700_d8">
                    Twitter
                  </Text>
                </a>
              </li>
              <li>
                <a href="Instagram" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-white-a700_d8">
                    Instagram
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-[18%] flex-col items-start gap-1.5 md:w-full">
            <Heading as="h5" className="!text-white-a700">
              Subscribe
            </Heading>
            <Input
              shape="round"
              name="Email Input"
              placeholder={`Enter Email`}
            />
            <Button
              color="black_900_b2"
              size="sm"
              shape="round"
              className="min-w-[120px] border border-solid border-pink-800"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="h-px bg-white-a700_7f" />
        <div className="flex flex-col items-center px-14 md:px-5">
          <Text as="p" className="!text-white-a700">
            &copy;2024 Innovation Alchemy, All ights reserved
          </Text>
        </div>
      </div>
    </footer>
  );
}
