import React from "react";
import { Button, Heading, Text, Img } from "./..";
import image_intro from "../../images/image_intro.png";

export default function EventDetails({
  eventDay = "15",
  eventMonthYear = "December 2024",
  eventTitle = "MEET & GREET",
  eventDescription = (
    <>
      Lorem ipsum, dolor sit <br /> amet consectetur adipisicing elit. <br />
      Consequatur, culpa excepturi iste <br /> molestias incidunt amet omnis
      aspernatur <br /> impedit reiciendis molestiae voluptatum!
    </>
  ),
  eventTime = "5 PM - 7 PM",
  registerButton = "Register Now",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full md:w-[32%] px-4 md:px-0`}
    >
      <div className="relative z-[3] flex flex-col items-center md:flex-row md:gap-4">
        <div className="flex flex-col items-center md:items-start md:w-[82px]">
          <Text
            size="text2xl"
            as="p"
            className="relative z-[4] flex h-[82px] w-[82px] items-center justify-center rounded-full bg-pink-800 text-center text-white"
          >
            {eventDay}
          </Text>
          <Text
            size="textmd"
            as="p"
            className="relative z-[4] mt-2 flex h-[82px] w-[82px] items-center justify-center rounded-full bg-pink-800 text-center text-white"
          >
            {eventMonthYear}
          </Text>
        </div>
      </div>
      <div className="relative mt-4 h-[300px] w-full rounded-[14px] bg-black-900/20 shadow-lg overflow-hidden">
        <Img
          src={image_intro}
          alt="Event Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 m-auto flex flex-col items-center gap-2.5 p-4 bg-black-900/60 text-white">
          <Heading size="headings" as="h4" className="text-center text-white">
            {eventTitle}
          </Heading>
          <Text as="p" className="text-center leading-6 text-white">
            {eventDescription}
          </Text>
          <Heading as="h5" className="text-center text-white">
            {eventTime}
          </Heading>
          <Button
            size="sm"
            variant="outline"
            shape="round"
            className="w-full max-w-[200px] font-semibold"
          >
            {registerButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
