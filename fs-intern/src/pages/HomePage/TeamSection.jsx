import React, { Suspense } from "react";
import { Text } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import user1 from "../../images/user1.png";
import user4 from "../../images/image4.png";
import user5 from "../../images/image5.png";

const profileList = [
  {
    userImage: user1,
    userName: "Alex Smith",
    userDescription: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        sed do eiusmod tempor incididunt ut labore et dolore
      </>
    ),
    userTitle: "Creative Leader",
  },
  {
    userImage: user4,
    userName: "May Brown",
    userDescription: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        sed do eiusmod tempor incididunt ut labore et dolore
      </>
    ),
    userTitle: "Creative Leader",
  },
  {
    userImage: user5,
    userName: "Roxie Swanson",
    userDescription: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        sed do eiusmod tempor incididunt ut labore et dolore
      </>
    ),
    userTitle: "Creative Leader",
  },
];

export default function TeamSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-10 px-14 md:px-5">
        {/* Updated text style */}
        <Text size="text4xl" as="p" className="!font-brice text-red-600">
          Meet Our Team
        </Text>
        {/* Profile cards */}
        <div className="flex flex-wrap gap-10 justify-center w-full lg:flex-row md:flex-col md:items-center">
          <Suspense fallback={<div>Loading feed...</div>}>
            {profileList.map((d, index) => (
              <div
                key={"teamList" + index}
                className="bg-white rounded-lg shadow-lg p-6 text-center w-64"
              >
                {/* Profile image */}
                <img
                  src={d.userImage}
                  alt={d.userName}
                  className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-red-600"
                />
                {/* User Name */}
                <h3 className="text-xl font-semibold text-red-600">
                  {d.userName}
                </h3>
                {/* Description */}
                <p className="text-gray-500 mt-2 mb-4">{d.userDescription}</p>
                {/* Title */}
                <p className="text-red-600 font-semibold">{d.userTitle}</p>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

