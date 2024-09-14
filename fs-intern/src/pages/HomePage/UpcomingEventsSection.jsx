import React, { Suspense } from "react";
import { Text, Button } from "../../components";
import EventDetails from "../../components/EventDetails";

const eventScheduleList = [
  {
    eventDay: "15",
    eventMonthYear: "December 2024",
    eventTitle: "MEET & GREET",
    eventDescription: (
      <>
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed do{" "}
        <br /> eiusmod tempor incididunt ut labore et dolore
      </>
    ),
    eventTime: "5 PM - 7 PM",
    registerButton: "Register Now",
  },
  {
    eventDay: "7",
    eventMonthYear: "October 2024",
    eventTitle: "MEET & GREET",
    eventDescription: (
      <>
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed do{" "}
        <br /> eiusmod tempor incididunt ut labore et dolore
      </>
    ),
    eventTime: "5 PM - 7 PM",
    registerButton: "Register Now",
  },
  {
    eventDay: "25",
    eventMonthYear: "August 2024",
    eventTitle: "MEET & GREET",
    eventDescription: (
      <>
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed do{" "}
        <br /> eiusmod tempor incididunt ut labore et dolore
      </>
    ),
    eventTime: "5 PM - 7 PM",
    registerButton: "Register Now",
  },
];

export default function UpcomingEventsSection() {
  return (
    <div className="flex flex-col items-center py-10 md:py-5">
      {/* Title Section */}
      <div className="container-xs flex flex-col items-center gap-10 px-5 md:px-2">
        <Text
          size="text4xl"
          as="h2"
          className="!font-brice text-center text-[#b43a4d] mb-8"
        >
          Our Upcoming Events and Activities
        </Text>

        {/* Event Cards Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
          <Suspense fallback={<div>Loading feed...</div>}>
            {eventScheduleList.map((event, index) => (
              <div
                key={"upcomingList" + index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-[300px] md:max-w-[350px]"
              >
                {/* Event Date Section */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#b43a4d] text-white font-bold text-lg rounded-full w-12 h-12 flex items-center justify-center">
                    {event.eventDay}
                  </div>
                  <Text as="p" className="text-gray-700 text-lg">
                    {event.eventMonthYear}
                  </Text>
                </div>

                {/* Event Details */}
                <Text
                  as="h3"
                  className="text-[#b43a4d] text-xl font-semibold mb-2"
                >
                  {event.eventTitle}
                </Text>
                <Text as="p" className="text-gray-600 text-sm text-center mb-4">
                  {event.eventDescription}
                </Text>
                <Text as="p" className="text-gray-600 font-bold mb-4">
                  {event.eventTime}
                </Text>

                {/* Register Button */}
                <Button className="bg-[#b43a4d] text-white font-semibold px-6 py-2 rounded-full">
                  {event.registerButton}
                </Button>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
