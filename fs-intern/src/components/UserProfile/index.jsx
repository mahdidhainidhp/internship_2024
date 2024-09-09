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
      className={`${props.className} flex flex-col items-center w-full gap-2.5`}
    >
      <div className="flex gap-3.5 self-stretch">
        <div className="relative h-[62px] w-full content-center">
          <div className="mx-auto flex-1">
            <div className="h-[30px] w-[46px] rounded-md bg-pink-800" />
            <div className="h-[30px] w-[46px] rounded-md bg-pink-800" />
          </div>
          <Text
            size="textlg"
            as="p"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-[46%] !font-bowlbyone leading-[46px] !text-white-a700"
          >
            {textFive}
          </Text>
        </div>
        <div className="relative h-[62px] w-full content-center">
          <div className="mx-auto flex-1">
            <div className="h-[30px] w-[46px] rounded-md bg-pink-800" />
            <div className="h-[30px] w-[46px] rounded-md bg-pink-800" />
          </div>
          <Text
            size="textlg"
            as="p"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-[46%] !font-bowlbyone leading-[46px] !text-white-a700"
          >
            {textEight}
          </Text>
        </div>
      </div>
      <Text as="p" className="!font-medium">
        {textDays}
      </Text>
    </div>
  );
}
