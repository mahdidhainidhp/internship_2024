import React from "react";
import { Button, Heading, Text, Img } from "./..";
import image_intro from "../../images/image_intro.png";

export default function EventDetails({
  eventDay = "15",
  eventMonthYear = "December 2024",
  eventTitle = "MEET & GREET",
  eventDescription = (
    <>
      Lorem ipsum, dolor sit <br /> amet consectetur adipisicing elit. <br />{" "}
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
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full`}
    >
      <div className="relative z-[3] mr-1 flex flex-wrap items-center justify-center self-stretch">
        <Text
          size="text2xl"
          as="p"
          className="relative z-[4] mr-1 flex h-[82px] w-[82px] items-center justify-center rounded-[40px] bg-pink-800 text-center !text-white-a700"
        >
          {eventDay}
        </Text>
        <Text
          size="textmd"
          as="p"
          className="relative z-[4] mr-1 flex h-[82px] w-[82px] items-center justify-center rounded-[40px] bg-pink-800 text-center !text-white-a700"
        >
          {eventMonthYear}
        </Text>
      </div>
      <div className="relative mt-[-10px] h-[300px] content-center self-stretch rounded-[14px] bg-black-900_07 shadow-x5">
        <Img
          src={image_intro}
          alt="Event Image"
          className="mx-auto h-[300px] w-full flex-1 object-cover"
        />
        <div className="absolute bottom-[13.12px] left-0 right-0 m-auto flex flex-col items-center gap-2.5 px-[38px] sm:px-5">
          <Heading size="headings" as="h4">
            {eventTitle}
          </Heading>
          <Text as="p" className="text-center leading-6">
            {eventDescription}
          </Text>
          <Heading as="h5">{eventTime}</Heading>
          <Button
            size="sm"
            variant="outline"
            shape="round"
            className="mx-[26px] self-stretch font-semibold"
          >
            {registerButton}
          </Button>
        </div>
      </div>
    </div>
  );
}