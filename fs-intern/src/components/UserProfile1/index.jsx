import React from "react";
import { Text, Heading, Img } from "./..";

export default function UserProfile1({
    userImage = "./images/user1.png",
    userName = "Alex Smith",
    userDescription = (
        <>
            Lorem ipsum dolor sit <br /> amet consectetur, adipisicing elit. <br /> Iusto ratione quod deserunt repellat <br /> autem quos libero totam fuga vel doloremque <br />
        </>
    ),
    userTitle = "Creative Leader",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[26px] p-[22px] sm:p-5 bg-black-900_07 shadow-xs rounded-[14px]`}>
            <div className="mt-2.5 w-[58%] rounded-[78px] border-[3px] border-solid border-pink-800 bg-white-a700">
                <Img src={userImage} alt="Profile Image" className="h-[156px] w-full rounded-[78px] object-cover" />
            </div>
            <Heading size="headings" as="h4">
                {userName}
            </Heading>
            <Text as="p" className="text-center leading-6">
                {userDescription}
            </Text>
            <Text as="p" className="!font-medium">
                {userTitle}
            </Text>
        </div>
    );
}