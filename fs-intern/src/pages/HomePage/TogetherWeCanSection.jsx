import React from "react";
import { Button, Text } from "../../components";

export default function TogetherWeCanSection() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center rounded-[30px] bg-gradient4 py-[26px] sm:py-5">
          <div className="container-xs flex flex-col items-center gap-[30px] px-14 md:px-5">
            <Text size="text2xl" as="p" className="!text-black-900">
              Together, we can redefine possibilities and break barriers.
            </Text>
            <Text size="textmd" as="p" className="!text-black-900">
              Reach out to us today to schedule a call and embark on this
              transformative journey together!
            </Text>
            <Button
              variant="gradient"
              shape="round"
              color="black_900_pink_800"
              className="min-w-[360px] font-semibold"
            >
              Schedule a Free Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
