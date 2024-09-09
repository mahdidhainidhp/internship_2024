import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import EventObjectiveSection from "./EventObjectivesSection";
import EventOverviewSection from "./EventOverviewSection";
import JoinNowSection from "./JoinNowSection";
import TargetAudienceSection from "./TargetAudienceSection";
import WomenInEnergySection from "./WomenInEnergySection";
import Footer from "../../components/Footer";
import logo from "../../images/logo.png";

export default function WESA2024Page() {
  return (
    <>
      <Helmet>
        <title>WESA 2024 Summit - Celebrating Women in Energy</title>
        <meta
          name="description"
          content="Attend the Women in Energy Summit and Awards 2024 to connect, celebrate achievements, and advocate for gender diversity in the energy sector. Register now for an inspiring experience."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <header className="relative z-[5] flex items-center justify-center bg-white-a700 py-[18px] shadow-sm">
          <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
            <Img
              // src="../images/logo.png"
              src={logo}
              alt="Header Logo"
              className="h-[44px] w-[176px] object-contain"
            />
            <div className="flex w-[70%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <ul className="flex flex-wrap gap-10">
                <li>
                  <a href="#" className="cursor-pointer">
                    <Text as="p" className="hover:text-black-900">
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-black-900">
                      WESA2024
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer">
                    <Text as="p" className="hover:text-black-900">
                      Get Involved
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer">
                    <Text as="p" className="hover:text-black-900">
                      Contact Us
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <Button
              size="xs"
              shape="round"
              className="min-w-[112px] border border-solid border-pink-800 font-semibold"
            >
              Login
            </Button>
          </div>
        </header>
        <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
          {/* join now section */}
          <JoinNowSection />

          {/* event overview section */}
          <EventOverviewSection />

          {/* event objectives section */}
          <EventObjectiveSection />

          {/* target audience section */}
          <TargetAudienceSection />

          {/* women in energy section */}
          <WomenInEnergySection />

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
