import React from "react";
import { Text, Heading } from "../../components";

export default function EventOverviewSection() {
  return (
    <>
      <div className="flex flex-col items-center py-8 md:py-16">
        <div className="container-xs flex flex-col items-start gap-3.5 px-4 md:px-5 lg:px-0 max-w-3xl lg:max-w-full lg:pl-32 lg:pr-16 text-left lg:text-left">
          <Heading
            size="textxl"
            as="h1"
            className="text-pink-900 font-bold leading-tight lg:text-4xl lg:leading-tight"
          >
            Celebrating Leadership and Innovation in the Energy Sector
          </Heading>
          <Text
            as="p"
            className="font-medium text-gray-700 leading-7 md:leading-8 lg:leading-9 lg:text-lg"
          >
            The Women in Energy Summit and Awards 2024, organized by World Elite
            Solutions, inspired by The Exclusive, and part of
            EmpowerHer.Energy, is the second edition of our annual event
            dedicated to celebrating and recognizing the outstanding
            achievements of women in the energy sector. Scheduled to be held
            from October 17th to 19th, 2024, this prestigious event will bring
            together leaders, innovators, and influencers to discuss the
            critical role of women in driving the future of energy. The summit
            will feature a blend of keynote speeches, panel discussions, and
            networking opportunities, culminating in an awards ceremony to honor
            exemplary women and organizations committed to gender diversity and
            inclusion.
          </Text>
        </div>
      </div>
    </>
  );
}
