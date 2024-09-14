import React from "react";
import { Text, Heading, Button, Img } from "../../components";
import image1 from "../../images/image2.png";
import star1 from "../../images/star_1.png";
import star2 from "../../images/star2.png";

export default function AboutUsSection() {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image and Stars Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-auto">
            <Img
              src={image1}
              alt="Secondary Image"
              className="w-auto h-auto object-cover"
            />
            <div className="absolute -top-8 left-[-40px]">
              <Img src={star1} alt="First Star Image" className="h-16 w-16" />
            </div>
            <div className="absolute top-8 right-[-40px]">
              <Img src={star2} alt="Second Star Image" className="h-16 w-16" />
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col w-full md:w-1/2 text-left md:text-left">
          <Text size="text4xl" as="p" className="font-bold text-[#A92448] mb-4">
            ABOUT US
          </Text>
          <Heading size="headings" as="h2" className="font-semibold mb-6 text-[#A92448]">
            Get to Know Us: Our Story and Team
          </Heading>
          <div className="space-y-4">
            <Text as="p" className="text-gray-900 leading-7">
              Welcome to EmpowerHer.Energy, where we are dedicated to unleashing
              the power and potential of women across industries. Our platform
              is committed to supporting women in sectors where they are
              traditionally underrepresented compared to men, including STEM,
              leadership and executive positions, finance and investment
              banking, construction, and skilled trades.
            </Text>
            <Text as="p" className="text-gray-900 leading-7">
              Born from a passionate desire to foster growth, empowerment, and
              advancement for women, EmpowerHer.Energy is a beacon of
              inspiration and support for women professionals, entrepreneurs,
              and enthusiasts alike.
            </Text>
            <Text size="textxl" as="p" className="mt-6 font-bold text-[#A92448]">
              What to expect?
            </Text>
            <Text as="p" className="text-gray-900 leading-7">
              With a rallying cry to redefine possibilities and shatter
              barriers, EmpowerHer.Energy embarks on a mission to illuminate
              these sectors with the brilliance and resilience of empowered
              women. This isn’t just a platform; it is a movement—a journey of
              transformation where each empowered woman becomes a catalyst for a
              brighter, more inclusive energy future and where we teach men to
              live with empowered women.
            </Text>
          </div>
          <div className="mt-8">
            <Button
              shape="round"
              className="border-2 border-solid border-[#A92448] text-[#A92448] font-semibold px-8 py-3"
            >
              Find Out More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
