import React, { Suspense } from "react";
import { Button, Heading, Img } from "../../components";
import clock1 from "../../images/clock1.png"; // Ensure the paths to icons are correct
import clock2 from "../../images/clock2.png";
import clock3 from "../../images/clock3.png";
import clock4 from "../../images/clock4.png";

// Define the list of professional profiles with images and descriptions
const professionalProfilesList = [
  {
    clockImage: clock1,
    audienceHeading: (
      <>
        Women <br /> professionals
      </>
    ),
    audienceDescription: (
      <>
        Women professionals in the energy sector, including engineers,
        executives, policymakers, and entrepreneurs.
      </>
    ),
  },
  {
    clockImage: clock2,
    audienceHeading: (
      <>
        Men in <br /> leadership
      </>
    ),
    audienceDescription: (
      <>
        Men in leadership roles who are advocates for gender diversity and
        inclusion.
      </>
    ),
  },
  {
    clockImage: clock3,
    audienceHeading: (
      <>
        Organizations <br /> and companies
      </>
    ),
    audienceDescription: (
      <>
        Organizations and companies committed to fostering an inclusive
        workplace.
      </>
    ),
  },
  {
    clockImage: clock4,
    audienceHeading: (
      <>
        Students and <br /> young professionals
      </>
    ),
    audienceDescription: (
      <>
        Students and young professionals aspiring to enter the energy industry.
      </>
    ),
  },
];

// Component to display each user profile card
const AudienceCard = ({ clockImage, audienceHeading, audienceDescription }) => {
  return (
    <div className="flex flex-col items-center text-center bg-[#5D1F33] rounded-lg p-6 w-[250px] lg:w-[300px]">
      <Img src={clockImage} alt="Audience Icon" className="w-[50px] mb-4" />{" "}
      {/* Ensure the image is above */}
      <h3 className="text-white font-semibold text-xl mb-4">
        {audienceHeading}
      </h3>
      <p className="text-white text-md font-normal leading-6">
        {audienceDescription}
      </p>
    </div>
  );
};

// Main Component for Target Audience Section
export default function TargetAudienceSection() {
  return (
    <>
      <div className="flex flex-col items-center py-12">
        {/* Container */}
        <div className="container flex flex-col items-start gap-[50px] px-6 md:px-12">
          {/* Section Heading - Aligned Left */}
          <Heading
            size="textxl"
            as="h2"
            className="text-[#9A243D] text-3xl font-bold text-left w-full"
          >
            Target Audience
          </Heading>

          {/* Cards Container */}
          <div className="w-full flex flex-wrap gap-[30px] justify-center lg:justify-between lg:flex-nowrap">
            <Suspense fallback={<div>Loading feed...</div>}>
              {professionalProfilesList.map((profile, index) => (
                <AudienceCard {...profile} key={"audienceCard" + index} />
              ))}
            </Suspense>
          </div>

          {/* Centered Register Now Button */}
          <div className="w-full flex justify-center mt-8">
            {" "}
            {/* Ensures centering of button */}
            <Button
              variant="solid"
              shape="round"
              className="min-w-[280px] px-8 py-4 bg-gradient-to-r from-[#AE275F] to-[#832140] text-white font-semibold text-lg rounded-full"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
