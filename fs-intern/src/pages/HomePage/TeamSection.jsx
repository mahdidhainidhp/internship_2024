import React, { Suspense } from "react";
import { Text } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import user1 from "../../images/user1.png";
import user4 from "../../images/image4.png";
import user5 from "../../images/image5.png";

const profileList = [
  {
    // userImage: "../../images/user1.png",
    userImage: user1,
    userName: "Alex Smith",
    userDescription: (
      <>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Vitae{" "}
        <br /> aliquam deserunt vero quis <br /> nemo veniam.
      </>
    ),
    userTitle: "Creative Leader",
  },
  {
    // userImage: "../../images/image4.png",
    userImage: user4,
    userName: "May Brown",
    userDescription: (
      <>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Vitae{" "}
        <br /> aliquam deserunt vero quis <br /> nemo veniam.
      </>
    ),
    userTitle: "Creative Leader",
  },
  {
    // userImage: "../../images/image5.png",
    userImage: user5,
    userName: "Roxie Swanson",
    userDescription: (
      <>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Vitae{" "}
        <br /> aliquam deserunt vero quis <br /> nemo veniam.
      </>
    ),
    userTitle: "Creative Leader",
  },
];

export default function TeamSection() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-10 px-14 md:px-5">
          <Text size="text2xl" as="p" className="!font-brice">
            Meet Our Team
          </Text>
          <div className="ml-2.5 flex gap-[50px] self-stretch md:ml-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {profileList.map((d, index) => (
                <UserProfile1 {...d} key={"teamList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
