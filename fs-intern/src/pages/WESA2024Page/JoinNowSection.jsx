import React from "react";
import { Button } from "../../components";
import imageJoin from "../../images/image_join.png";

export default function JoinNowSection() {
    return (
        <>
            <div className="flex h-[532px] items-end justify-center bg-join-now bg-cover bg-no-repeat py-28 md:h-auto md:py-5">
                <div className="container-xs mt-[252px] flex justify-center px-14 md:px-5">
                    <Button size="lg" className="min-w-[264px] rounded-[20px] border border-solid border-pink-800 font-semibold">
                        Join Now
                    </Button>
                </div>
            </div>
        </>
    );
}
