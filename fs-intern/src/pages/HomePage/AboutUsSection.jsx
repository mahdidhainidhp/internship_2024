import React from "react";
import { Text, Heading, Button, Img } from "../../components";
import image1 from "../../images/image2.png";
import star1 from "../../images/star_1.png";
import star2 from "../../images/star2.png";

export default function AboutUsSection() {
  return (
    <>
      <div className="flex">
        <div className="container-xs flex md:px-5">
          <div className="flex w-full items-center md:flex-col">
            <div className="flex w-[38%] flex-col gap-0.5 md:w-full">
              <div className="relative h-[480px] content-center rounded-[10px] bg-white-a700 py-1.5 md:h-auto">
                <Img
                  // src="../images/image2.png"
                  src={image1}
                  alt="Secondary Image"
                  className="ml-auto mr-12 h-[444px] w-[72%] object-contain md:mr-0"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-[314px] md:gap-[235px] sm:gap-[157px]">
                  <Img
                    // src="../../images/star1.png"
                    src={star1}
                    alt="First Star Image"
                    className="h-[70px] w-[70px]"
                  />
                  <Img
                    // src="../../images/star2.png"
                    src={star2}
                    alt="Second Star Image"
                    className="mr-3 h-[70px] w-[70px] self-end md:mr-0"
                  />
                </div>
              </div>
              <Button
                shape="round"
                className="mx-[88px] self-stretch border border-solid border-pink-800 font-semibold md:mx-0"
              >
                Find Out More
              </Button>
            </div>
            <div className="relative z-[1] flex flex-1 flex-col items-start gap-1.5 md:self-stretch">
              <Text size="text4xl" as="p" className="!font-brice">
                About Us
              </Text>
              <div className="flex flex-col items-start self-stretch">
                <Heading size="headings" as="h2" className="!font-semibold">
                  Get to Know Us: Our Story and Team
                </Heading>
                <Text as="p" className="mt-1 leading-6 !text-black-900">
                  <>
                    Welcome to EmpowerHer.Energy, where we are dedicated to
                    unleashing the power and <br />
                    potential of women across industries. Our platform is
                    committed to supporting women <br />
                    in sectors where they are traditionally underrepresented
                    compared to men, including <br />
                    STEM, leadership and executive positions, finance and
                    investment banking, construction, <br />
                    and skilled trades.
                  </>
                </Text>
                <Text as="p" className="mt-2 leading-6 !text-black-900">
                  <>
                    Born from a passionate desire to foster growth, empowerment,
                    and advancement for <br />
                    women, EmpowerHer.Energy is a beacon of inspiration and
                    support for women <br />
                    professionals, entrepreneurs, and enthusiasts alike.
                  </>
                </Text>
                <Text size="textmd" as="p" className="mt-3.5">
                  What to expect?
                </Text>
                <Text as="p" className="mt-1 leading-6 !text-black-900">
                  <>
                    With a rallying cry to redefine possibilities and shatter
                    barriers, EmpowerHer.Energy <br />
                    embarks on a mission to illuminate these sectors with the
                    brilliance and resilience of <br />
                    empowered women. This isn&#39;t just a platform; it is a
                    movement—a journey of <br />
                    transformation where each empowered woman becomes a catalyst
                    for a brighter, more <br />
                    inclusive energy future and where we teach men to live with
                    empowered women.
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
