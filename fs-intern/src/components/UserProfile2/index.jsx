import React from "react";
import { Heading, Img } from "./..";
export default function UserProfile2({
  clockImage = "",
  womenHeading = (
    <>
      Women
      <br />
      professionals
    </>
  ),
  womenDescription = (
    <>
      Women professionals in <br /> the energy sector, including <br />{" "}
      engineers, executives, <br /> policymakers, and <br /> entrepreneurs.
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[368px] w-[24%] md:w-full relative`}
    >
      <div className="mx-auto flex flex-1 flex-col items-center gap-[30px]">
        <Img src={clockImage} alt="Clock Image" className="h-[92px] w-[92px]" />
        <div className="flex flex-col items-center gap-[18px] self-stretch rounded-[10px] bg-gray-900_01 px-7 py-[30px] sm:p-5">
          <Heading
            as="h5"
            className="mt-6 text-center leading-6 !text-white-a700"
          >
            {womenHeading}
          </Heading>
          <Heading
            as="p"
            size="textxs"
            className="text-center !font-normal leading-[18px] !text-white-a700"
          >
            {womenDescription}
          </Heading>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-[23%] m-auto flex w-[34%] rotate-[-45deg] flex-col items-center justify-center bg-white-a700 p-[26px] sm:p-5">
        <div className="h-[20px] w-[20px] bg-gray-900_01" />
      </div>
    </div>
  );
}
