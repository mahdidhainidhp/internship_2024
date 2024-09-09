import React from "react";
import { Img, Button, Text } from "../../components";
import star2 from "../../images/star2.png";
import gif340 from "../../images/output-onlinegiftools-340.png";
import gif308 from "../../images/output-onlinegiftools-308.png";

export default function EventsAndWorkshopsSetion() {
  return (
    <>
      <div className="flex">
        <div className="container-xs flex md:px-5">
          <div className="flex w-full flex-col">
            <Text size="text4xl" as="p" className="!font-brice leading-[111px]">
              <>
                Events &<br /> Workshops
              </>
            </Text>
            <div className="relative mt-[-224px] flex items-center md:flex-col">
              <div className="relative z-[2] mb-3.5 flex flex-1 flex-col items-start gap-[18px] self-end md:self-stretch sm:self-auto">
                <div className="flex flex-col items-start gap-3 self-stretch">
                  <Text as="p" className="leading-6 !text-black-900">
                    <>
                      Join us for dynamic events and workshops designed to
                      empower women! Whether you&#39;re <br />
                      seeking personal growth, professional development, or a
                      space to connect with like-minded <br />
                      individuals, our programs offer inspiration, tools, and
                      support to help you achieve your goals. <br />
                      Together, we rise!
                    </>
                  </Text>
                  <Text as="p" className="leading-6 !text-black-900">
                    <>
                      From leadership seminars to creative workshops and
                      wellness sessions, our events are <br />
                      crafted to uplift and energize. Discover new
                      opportunities, expand your network, and <br />
                      embrace your power in a vibrant community of women
                      striving for success.
                    </>
                  </Text>
                </div>
                <Button
                  shape="round"
                  className="min-w-[280px] border border-solid border-pink-800 font-semibold"
                >
                  Join Now
                </Button>
              </div>
              <div className="relative ml-[-10px] h-[526px] w-[36%] md:ml-0 md:w-full">
                <Img
                  // src="../../images/output-onlinegiftools-308.png"
                  src={gif308}
                  alt="First Event Image"
                  className="absolute bottom-0 left-0 m-auto h-[308px] w-[308px] object-cover"
                />
                <Img
                  // src="../../images/output-onlinegiftools-340.png"
                  src={gif340}
                  alt="Second Event Image"
                  className="absolute right-0 top-0 m-auto h-[340px] w-[340px] object-cover"
                />
                <Img
                  // src="../../images/star2.png"
                  src={star2}
                  alt="Third Event Image"
                  className="absolute left-0 top-[30px] m-auto h-[70px] w-[70px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
