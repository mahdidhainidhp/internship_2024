import React from "react";
import { Button, Text } from "../../components";

export default function TogetherWeCanSection() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center rounded-[30px] bg-gradient-to-r from-pink-400 to-[#b43a4d] py-[26px] sm:py-5 px-10 md:px-14 w-full max-w-[1000px]">
          <div className="text-center">
            <Text size="text3xl" as="p" className="!text-black font-semibold">
              Together, we can redefine possibilities and break barriers.
            </Text>
            <Text size="textlg" as="p" className="!text-black mt-4">
              Reach out to us today to schedule a call and embark on this transformative journey together!
            </Text>
          </div>

          {/* Button */}
          <Button
            variant="gradient"
            shape="round"
            color="pink-600"
            className="mt-6 bg-gradient-to-r from-[#b43a4d] to-pink-400 text-white font-semibold text-lg px-10 py-3 rounded-full shadow-lg transition hover:shadow-xl"
          >
            Schedule a Free Discovery Call
          </Button>
        </div>
      </div>
    </>
  );
}
