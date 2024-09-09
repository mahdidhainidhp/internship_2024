import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutUsSection from "./AboutUsSection";
import EmpowermentSection from "./EmpowermentSection";
import EventsAndWorkshopsSection from "./EventsAndWorkshopsSection";
import InsightsSection from "./InsightsSection";
import TeamSection from "./TeamSection";
import TogetherWeCanSection from "./TogetherWeCanSection";
import UpcomingEventsSection from "./UpcomingEventsSection";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Empower Her - Unleashing Women&#39;s Power & Potential</title>
        <meta name="description" content="Join EmpowerHerEnergy" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <Header />
        <div className="overflow-x-scroll">
          {/* empowerment section */}
          <EmpowermentSection />
          <div className="ml-10 mr-7 flex-w-[1210px] flex-col gap-[100px] md:mx-0 md:gap-[75px] sm:gap-[50px]">
            {/* about us section */}
            <AboutUsSection />

            {/* team section */}
            <TeamSection />

            {/* insights section */}
            <InsightsSection />

            {/* events and workshops section */}
            <EventsAndWorkshopsSection />

            {/* upcoming events section */}
            <UpcomingEventsSection />

            {/* together we can section */}
            <TogetherWeCanSection />
          </div>
          <Footer className="mt-[98px] w-[1280px]" />
        </div>
      </div>
    </>
  );
}
