import React from "react";
import { Text } from "..";

export default function UserProfile({
  textFive = "5",
  textEight = "8",
  textDays = "Days",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-4 md:gap-6`}
    >
      <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
        <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="h-8 w-12 md:h-10 md:w-14 rounded-md bg-pink-800 mb-1" />
            <div className="h-8 w-12 md:h-10 md:w-14 rounded-md bg-pink-800" />
          </div>
          <Text
            size="textlg"
            as="p"
            className="absolute inset-0 m-auto text-center text-white-a700 font-bowlbyone leading-6 md:leading-8"
          >
            {textFive}
          </Text>
        </div>
        <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="h-8 w-12 md:h-10 md:w-14 rounded-md bg-pink-800 mb-1" />
            <div className="h-8 w-12 md:h-10 md:w-14 rounded-md bg-pink-800" />
          </div>
          <Text
            size="textlg"
            as="p"
            className="absolute inset-0 m-auto text-center text-white-a700 font-bowlbyone leading-6 md:leading-8"
          >
            {textEight}
          </Text>
        </div>
      </div>
      <Text as="p" className="font-medium mt-2 md:mt-4">
        {textDays}
      </Text>
    </div>
  );
}
