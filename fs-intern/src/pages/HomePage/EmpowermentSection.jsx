import { Heading, Button, Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const homePageLayout = [
  { textFive: "5", textEight: "8", textDays: "Days" },
  { textFive: "5", textEight: "8", textDays: "Days" },
  { textFive: "5", textEight: "8", textDays: "Days" },
  { textFive: "5", textEight: "8", textDays: "Days" },
];

export default function EmpowermentSection() {
  return (
    <>
      <div className="flex h-[476px] w-[1280px] items-start justify-center bg-[url(../../../public/images/image_intro.png)] bg-cover bg-no-repeat py-14 md:h-auto md:py-5">
        <div className="container-xs mb-[76px] flex justify-centermd:px-5">
          <div className="flex w-full items-center md:flex-col">
            <div className="flex w-[46%] flex-col items-start gap-[30px] md:w-full">
              <Text
                size="text2xl"
                as="p"
                className="!font-medium leading-[48px]"
              >
                <>
                  Be Part of the <br /> Movement to <br /> Empower Women <br />{" "}
                  Worldwide!
                </>
              </Text>
              <Button
                shape="round"
                className="min-w-[280px] border border-solid border-pink-800 font-semibold"
              >
                Become a Member!
              </Button>
            </div>
            <div className="flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
              <Heading size="textxl" as="h1" className="mr-[78px] md:mr-0">
                Global Launch in
              </Heading>
              <div className="ml-[236px] grid grid-cols-3 gap-10 self-stretch md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {homePageLayout.map((d, index) => (
                    <UserProfile {...d} key={"launchGrid" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
