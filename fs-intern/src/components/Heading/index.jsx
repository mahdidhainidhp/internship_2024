import React from "react";

const sizes = {
    textxs: "text-[15px] font-medium",
    textxl: "text-[35px] font-medium md:text-[33px] sm:text-[31px]",
    headingxs: "text-[20px] font-bold",
    headings: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
};

const Heading = ({ children, className = "", as, size = "headingxs", ...restProps }) => {
    const Component = as || "h6";

    return (
        <Component className={`text-pink-800 font-cabin ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading };