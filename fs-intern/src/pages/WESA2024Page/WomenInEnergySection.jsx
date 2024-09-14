import React from "react";
import { Text, Img } from "../../components";
import WomenImage from "../../images/women.png"; // Importing the provided women image

export default function WomenInEnergySection() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-10 px-14 md:px-5">
          <div className="self-stretch">
            <div>
              {/* Flex container for image grid */}
              <div className="flex flex-wrap justify-center md:flex-col">
                <Img
                  src={WomenImage} // Using the imported image
                  alt="2023 Women in Energy Awards Winners"
                  className="h-auto w-full rounded-[14px] object-contain md:w-full"
                />
              </div>
            </div>
          </div>
          <Text
            size="text3xl"
            as="p"
            className="text-center !font-brice leading-[69px] mt-10"
          >
            <>
              2023 Women in Energy <br /> Awards Winners
            </>
          </Text>
        </div>
      </div>
    </>
  );
}
