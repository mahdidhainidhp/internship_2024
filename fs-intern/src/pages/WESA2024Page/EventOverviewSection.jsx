import React from "react";
import { Text, Heading } from "../../components";

export default function EventOverviewSection() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-3.5 md:px-5">
          <Heading size="textxl" as="h1">
            Celebrating Leadership and Innovation in the Energy Sector
          </Heading>
          <Text as="p" className="!font-medium leading-6 !text-black-900_99">
            <>
              The Women in Energy Summit and Awards 2024, organized by World
              Elite Solutions, inspired by The Exclusive, and part of <br />
              EmpowerHer.Energy, is the second edition of our annual event
              dedicated to celebrating and recognizing the outstanding
              achievements of <br />
              women in the energy sector. Scheduled to be held from October 17th
              to 19th, 2024, this prestigious event will bring together leaders,{" "}
              <br />
              innovators, and influencers to discuss the critical role of women
              in driving the future of energy. The summit will feature a blend
              of keynote <br />
              speeches, panel discussions, and networking opportunities,
              culminating in an awards ceremony to honor exemplary women and
              organizations <br />
              committed to gender diversity and inclusion.
            </>
          </Text>
        </div>
      </div>
    </>
  );
}
