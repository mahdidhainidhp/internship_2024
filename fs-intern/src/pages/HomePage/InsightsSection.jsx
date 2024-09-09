import React from "react";
import { Button, Text, Img } from "../../components";
import gif from "../../images/output-onlinegiftools.png"

export default function InsightsSection() {
  return (
    <>
      <div>
        <div className="relative h-[292px] rounded-[30px] bg-gradient3 py-[30px] sm:py-5">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[230px] flex-1 content-end md:h-auto">
            <Img
              // src="../../images/output-onlinegiftools.png"
              src={gif}
              alt="Profile Image"
              className="ml-auto h-[158px] object-cover"
            />
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-col items-center gap-10 px-14 md:px-5">
              <Text size="text2xl" as="p" className="!text-black-900">
                Insights and Inspirations: Discover HER profiles and stories
              </Text>
              <Text
                size="textmd"
                as="p"
                className="text-center leading-[30px] !text-black-900"
              >
                <>
                  Stay up-to-date with the latest industry trends and profiles.
                  Are you interested in contributing? <br />
                  Please shoot us an email!
                </>
              </Text>
              <Button
                variant="outline"
                shape="round"
                className="min-w-[280px] !bg-gradient1 font-semibold"
              >
                Share your story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
