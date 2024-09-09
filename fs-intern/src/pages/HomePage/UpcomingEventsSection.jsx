import React, { Suspense } from "react";
import { Text } from "../../components";
import EventDetails from "../../components/EventDetails";

const evenScheduleList = [
  {
    eventDay: "15",
    eventMonthYear: "December 2024",
    eventTitle: "MEET & GREET",
    eventDescription: (
      <>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Vitae{" "}
        <br /> aliquam deserunt vero quis <br /> nemo veniam.
      </>
    ),
    eventTime: "5 PM - 7 PM",
    registerButton: "Register Now",
  },
  {
    eventDay: "15",
    eventMonthYear: "December 2024",
    eventTitle: "MEET & GREET",
    eventDescription: (
      <>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Vitae{" "}
        <br /> aliquam deserunt vero quis <br /> nemo veniam.
      </>
    ),
    eventTime: "5 PM - 7 PM",
    registerButton: "Register Now",
  },
  {
    eventDay: "15",
    eventMonthYear: "December 2024",
    eventTitle: "MEET & GREET",
    eventDescription: (
      <>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Vitae{" "}
        <br /> aliquam deserunt vero quis <br /> nemo veniam.
      </>
    ),
    eventTime: "5 PM - 7 PM",
    registerButton: "Register Now",
  },
];

export default function UpcomingEventsSection() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex- flex-col items-center gap-[50px] px-14 md:px-5">
          <Text size="text2xl" as="p" className="!font-brice">
            Our upcoming events and activities
          </Text>
          <div className="ml-2.5 flex gap-[50px] self-stretch md:ml-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {evenScheduleList.map((d, index) => (
                <EventDetails {...d} key={"upcomingList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
