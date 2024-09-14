import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import EventObjectiveSection from "./EventObjectivesSection";
import EventOverviewSection from "./EventOverviewSection";
import JoinNowSection from "./JoinNowSection";
import TargetAudienceSection from "./TargetAudienceSection";
import WomenInEnergySection from "./WomenInEnergySection";
import Footer from "../../components/Footer";
import logo from "../../images/logo.png";
import menuIcon from "../../images/menu-icon.png"; // Add menu icon for mobile view

export default function WESA2024Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <header className="relative z-[5] flex items-center justify-between bg-white-a700 py-[18px] shadow-sm md:px-5">
          <div className="container flex items-center justify-between gap-5 w-full px-4 md:px-0">
            {/* Logo */}
            <Img
              src={logo}
              alt="Header Logo"
              className="h-[44px] w-[176px] object-contain"
            />
            
            {/* Desktop Navbar */}
            <nav className="hidden md:flex flex-1 justify-center items-center">
              <ul className="flex flex-wrap gap-10">
                <li>
                  <a href="#" className="cursor-pointer text-pink-800 hover:text-black-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-900">
                    WESA2024
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer text-pink-800 hover:text-black-900">
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer text-pink-800 hover:text-black-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Login Button */}
            <Button
              size="xs"
              shape="round"
              className="min-w-[112px] bg-pink-800 text-white border border-solid border-pink-800 font-semibold hidden md:block"
            >
              Login
            </Button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                <Img
                  src={menuIcon}
                  alt="menu icon"
                  className="h-6 w-6 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-10">
              <ul className="flex flex-col items-center gap-5 py-5">
                <li>
                  <a href="#" className="cursor-pointer text-pink-800 hover:text-black-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-900">
                    WESA2024
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer text-pink-800 hover:text-black-900">
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer text-pink-800 hover:text-black-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[112px] bg-pink-800 text-white border border-solid border-pink-800 font-semibold"
                  >
                    Login
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </header>

        {/* Main Page Content */}
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
