import React from "react";
import { Text, Heading, Img } from "../../components";
import objectivesImage from "../../images/objectives.png"; // Ensure this path is correct

export default function EventObjectivesSection() {
  return (
    <>
      <div className="flex justify-center py-12">
        <div className="container flex flex-col lg:flex-row lg:items-start lg:justify-between lg:space-x-12 lg:px-16 px-4">
          {/* Text Content Section */}
          <div className="lg:w-1/2 w-full lg:mr-10">
            {/* Heading */}
            <Heading
              size="textxl"
              as="h2"
              className="text-[#9A243D] font-bold mb-6 lg:mb-8"
            >
              Event Objectives
            </Heading>

            {/* Bullet Points */}
            <ul className="list-disc pl-5 space-y-6 text-lg leading-7 text-[#555555] font-medium">
              <li>
                Empower Women in Energy: Provide a platform for women in the
                energy sector to share their experiences, challenges, and
                successes, fostering a supportive community that encourages
                growth and leadership.
              </li>
              <li>
                Highlight Achievements: Recognize and celebrate the
                contributions of women who have significantly impacted the
                energy industry through innovation, leadership, and dedication.
              </li>
              <li>
                Promote Gender Diversity: Advocate for policies and practices
                that enhance gender diversity and inclusion within the energy
                sector, showcasing best practices and success stories.
              </li>
              <li>
                Foster Networking: Facilitate meaningful connections among
                professionals, providing opportunities for collaboration,
                mentorship, and professional development.
              </li>
            </ul>

            {/* Final Paragraph */}
            <Text
              as="p"
              className="mt-8 text-lg leading-7 text-[#555555] font-medium"
            >
              The Women in Energy Summit and Awards 2024 is not just an event;
              it is a movement towards a more inclusive and diverse energy
              sector. By recognizing and celebrating the achievements of women,
              we inspire future generations and pave the way for a more
              equitable industry. The event will also serve as a catalyst for
              meaningful conversations and actions that will drive the energy
              sector towards greater gender parity and innovation.
            </Text>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center">
            <div className="w-full max-w-md">
              <Img
                src={objectivesImage}
                alt="Event Objectives Graphic"
                className="object-contain w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
