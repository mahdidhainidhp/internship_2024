import React from "react";
import { Button, Text, Img } from "../../components";
import gif from "../../images/output-onlinegiftools.png";

export default function InsightsSection() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#9A243D] to-[#F491A6] rounded-[20px] py-10 px-14 md:py-5 md:px-5 flex justify-between items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-5 items-start">
          <Text size="text4xl" as="h2" className="text-white">
            Insights and Inspiration: Discover HER profiles and stories
          </Text>
          <Text
            size="textlg"
            as="p"
            className="leading-[30px] text-white"
          >
            Stay up-to-date with the latest industry trends and profiles. Are you
            interested in contributing? Please shoot us an email!
          </Text>
          <Button
            variant="outline"
            shape="round"
            className="min-w-[180px] px-8 py-3 rounded-full bg-[#782936] text-white shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            Share your story
          </Button>
        </div>
        {/* Icon Image */}
        <div className="hidden md:block">
          <Img
            src={gif}
            alt="Profile Image"
            className="w-40 h-40 object-contain"
          />
        </div>
      </div>
    </>
  );
}
