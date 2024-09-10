import React, { Suspense } from "react";
import { Button, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";

const professionalprofilesList = [
  {
    clockImage: "../../images/clock1.png",
    womenHeading: (
      <>
        Women <br /> professionals
      </>
    ),
    womenDescription: (
      <>
        Women professionals in <br /> the energy sector, including <br />{" "}
        engineers, executives, <br /> policymakers, and <br />
        entreprenuers.
      </>
    ),
  },
  {
    clockImage: "../../images/clock2.png",
    womenHeading: (
      <>
        Men in <br /> leadership
      </>
    ),
    womenDescription: (
      <>
        Men in leadership roles <br /> who are advocates for gender <br />{" "}
        diversity and inclusion.
      </>
    ),
  },
  {
    clockImage: "../../images/clock3.png",
    womenHeading: (
      <>
        Organizations <br /> and companies
      </>
    ),
    womenDescription: (
      <>
        Organizations and <br /> companies committed <br /> to fostering an
        inclusive <br /> workplace
      </>
    ),
  },
  {
    clockImage: "../../images/clock4.png",
    womenHeading: (
      <>
        Students and <br /> young professionals
      </>
    ),
    womenDescription: (
      <>
        Students and young <br /> professionals aspiring to <br /> enter the
        energy industry.
      </>
    ),
  },
];

export default function TargetAudienceSection() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[50px] md:px-5">
          <Heading size="textxl" as="h2" className="self-start">
            Target AUdience
          </Heading>
          <div className="mx-16 flex gap-[50px] self-stretch md:mx-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {professionalprofilesList.map((d, index) => (
                <UserProfile2 {...d} key={"clockList" + index} />
              ))}
            </Suspense>
          </div>
          <Button
            variant="outline"
            shape="round"
            className="min-w-[280px] font-semibold"
          >
            Register Now
          </Button>
        </div>
      </div>
    </>
  );
}
