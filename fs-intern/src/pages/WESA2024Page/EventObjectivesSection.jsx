import React from "react";
import { Text, Heading, Img } from "../../components";

export default function EventObjectivesSection() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full items-center md:flex-col">
            <div className="flex flex-1 flex-col items-start self-center md:self-stretch">
              <Heading size="textxl" as="h2">
                Event Objectives
              </Heading>
              <Text
                as="p"
                className="mt-3.5 !font-medium leading-6 !text-black-900_99"
              >
                <>
                  Empower Women in Energy: Provide a platform for women in the
                  energy <br />
                  sector to share their experiences, challenges, and successes,
                  fostering a <br />
                  supportive community that encourages growth and leadership.{" "}
                  <br />
                  <br />
                  Highlight Achievements: Recognize and celebrate the
                  contributions of <br />
                  women who have significantly impacted the energy industry
                  through <br />
                  innovation, leadership, and dedication. <br />
                  <br />
                  Promote Gender Diversity: Advocate for policies and practices
                  that <br />
                  enhance gender diversity and inclusion within the energy
                  sector, <br />
                  showcasing best practices and success stories. <br />
                  <br />
                  Foster Networking: Facilitate meaningful connections among{" "}
                  <br />
                  professionals, providing opportunities for collaboration,
                  mentorship, <br />
                  and professional development.
                </>
              </Text>
              <Text
                as="p"
                className="mt-[34px] !font-medium leading-6 !text-black-900_99"
              >
                <>
                  The Women in Energy Summit and Awards 2024 is not just an
                  event; it is a movement <br />
                  towards a more inclusive and diverse energy sector. By
                  recognizing and celebrating the <br />
                  achievements of women, we inspire future generations and pave
                  the way for a more equitable <br />
                  industry. The event will also serve as a catalyst for
                  meaningful conversations and actions that will <br />
                  drive the energy sector towards greater gender parity and
                  innovation
                </>
              </Text>
            </div>
            <div className="relative ml-[-134px] mt-2 w-[38%] md:ml-0 md:w-full">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center self-stretch">
                  <div className="relative h-[176px] w-[34%]">
                    <Img
                      src=""
                      alt="Settings Image"
                      className="absolute right-[-1.26px] top-0 m-auto h-[92px] w-[50%] object-contain"
                    />
                    <div className="absolute bottom-px left-[0.26px] m-auto flex w-[150px] flex-col items-center justify-center rounded-[74px] bg-gray-200 shadow-sm">
                      <Heading
                        size="textxs"
                        as="h3"
                        className="mb-3.5 text-center leading-[18px]"
                      >
                        <>
                          Foster <br /> Networking
                        </>
                      </Heading>
                    </div>
                  </div>
                  <div className="relative z-[1] mt-[-56px] flex items-center self-stretch sm:flex-col">
                    <div className="flex flex-1 items-start sm:flex-col sm:self-stretch">
                      <div className="relative mt-[26px] h-[128px] w-[40%] sm:w-full">
                        <div className="absolute bottom-[-0.94px] right-[-0.29px] m-auto flex w-[150px] flex-col items-center justify-center rounded-[74px] bg-yellow-100 shadow-sm">
                          <Heading
                            size="textxs"
                            as="h4"
                            className="text-center leading-[18px]"
                          >
                            <>
                              Promote <br /> Gender <br /> Diversity
                            </>
                          </Heading>
                        </div>
                        <Img
                          src=""
                          alt="Settings Icon"
                          className="absolute left-0 top-0 m-auto h-[86px] w-[54%] object-contain"
                        />
                      </div>
                      <div className="relative z-[2] ml-[-56px] flex h-[262px] w-[260px] flex-col items-center justify-center self-center bg-cover bg-no-repeat md:h-auto sm:ml-0">
                        <Text as="p" size="textmd" className="!font-medium">
                          Objectives
                        </Text>
                      </div>
                    </div>
                    <div className="relative z-[3] mb-5 ml-[-42px] h-[180px] w-[32%] self-end sm:ml-0 sm:w-full sm:self-auto">
                      <div className="absolute left-0 top-[0.01px] m-auto flex w-[150px] flex-col items-center justify-center rounded-[74px] bg-blue-200 shadow-sm">
                        <Heading
                          size="textxs"
                          as="h5"
                          className="text-center leading-[18px]"
                        >
                          <>
                            Empower <br />
                            Women in <br /> Energy
                          </>
                        </Heading>
                      </div>
                      <Img
                        src=""
                        alt="Ellipse Image"
                        className="absolute bottom-[-0.46px] right-[27px] m-auto h-[56px] w-[68%] object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative z=[4] mt-[-44px] h-[176px] w-[44%]">
                  <div className="absolute left-[14%] top-0 m-auto flex w-[150px] flex-col items-center justify-centerrounded-[74px] bg-deep_orange-100 shadow-sm">
                    <Heading
                      size="textxs"
                      as="h6"
                      className="text-center leading-[18px]"
                    >
                      <>
                        Highlight <br /> Achievements
                      </>
                    </Heading>
                  </div>
                  <Img
                    src=""
                    alt="Contrast Image"
                    className="absolute bottom-0 left-0 m-auto h-[92px] w-[38%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
