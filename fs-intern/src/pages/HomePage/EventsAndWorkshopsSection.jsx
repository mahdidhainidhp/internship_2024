import React from "react";
import { Img, Button, Text } from "../../components";
import star2 from "../../images/star2.png";
import gif340 from "../../images/output-onlinegiftools-340.png";
import gif308 from "../../images/output-onlinegiftools-308.png";

export default function EventsAndWorkshopsSection() {
  return (
    <>
      <div className="flex flex-col items-center py-10 md:py-5">
        <div className="container flex flex-col items-center lg:flex-row lg:justify-between px-5 md:px-2">
          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
            <Text
              size="text4xl"
              as="h1"
              className="!font-brice leading-tight text-center lg:text-left mb-10 text-[#b43a4d]"
            >
              Events &<br /> Workshops
            </Text>
            <div className="flex flex-col items-start gap-6 mb-6 text-black-900 lg:items-start lg:text-left">
              <Text as="p" className="leading-6 !text-gray-700">
                Join us for dynamic events and workshops designed to empower
                women! Whether you're seeking personal growth, professional
                development, or a space to connect with like-minded individuals, 
                our programs offer inspiration, tools, and support to help you 
                achieve your goals. Together, we rise!
              </Text>
              <Text as="p" className="leading-6 !text-gray-700">
                From leadership seminars to creative workshops and wellness
                sessions, our events are crafted to uplift and energize. 
                Discover new opportunities, expand your network, and embrace 
                your power in a vibrant community of women striving for success.
              </Text>
              <Button
                shape="round"
                className="min-w-[280px] border border-solid border-pink-800 font-semibold mt-4"
              >
                Join Now
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-auto flex justify-center items-center mt-10 lg:mt-0">
            <div className="relative flex justify-center items-center lg:flex-col lg:gap-10">
              <Img
                src={gif308}
                alt="First Event Image"
                className="absolute lg:static lg:mb-4 h-[308px] w-[308px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
