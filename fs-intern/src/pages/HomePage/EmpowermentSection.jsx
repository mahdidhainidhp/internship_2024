import { Heading, Button, Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const homePageLayout = [
  { textFive: "58", textEight: "Days" },
  { textFive: "16", textEight: "Hours" },
  { textFive: "30", textEight: "Minutes" },
  { textFive: "29", textEight: "Seconds" },
];

export default function EmpowermentSection() {
  return (
    <div className="relative flex flex-col items-center justify-between bg-intro bg-cover bg-no-repeat py-14 px-4 md:px-5 bg-gradient-to-r from-orange-300 to-peach-400">
      <div className="container-xs flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left side: Heading and Button */}
        <div className="text-left max-w-lg">
          <Text
            size="text-5xl"
            as="h2"
            className="!font-bold leading-tight text-red-700"
          >
            Be Part of the Movement to Empower Women Worldwide!
          </Text>
          <Button
            shape="round"
            className="mt-6 bg-red-600 text-white py-3 px-6 rounded-full text-lg hover:bg-red-700"
          >
            Become a Member!
          </Button>
        </div>
        
        {/* Right side: Countdown */}
        <div className="text-center mt-8 md:mt-0">
          <Heading size="text-2xl" as="h3" className="text-red-700 mb-4 font-bold">
            Global Launch in
          </Heading>
          <div className="grid grid-cols-4 gap-4">
            <Suspense fallback={<div>Loading...</div>}>
              {homePageLayout.map((d, index) => (
                <div
                  key={"launchGrid" + index}
                  className="text-center"
                >
                  <div className="bg-red-600 text-white text-4xl font-bold py-2 px-4 rounded">
                    {d.textFive}
                  </div>
                  <p className="mt-2 text-red-700 font-semibold">
                    {d.textEight}
                  </p>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
