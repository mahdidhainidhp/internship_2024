import React from "react";

const sizes = {
    text: "text-[20px] font-normal not-italic",
    textmd: "text-[25px] font-normal not-italic md:text-[23px] sm:text-[21px]",
    textlg: "text-[20px] font-normal not-italic md:text-[28px] sm:text-[26px]",
    text2xl: "text-[20px] font-normal not-italic md:text-[38px] sm:text-[36px]",
    text3xl: "text-[20px] font-normal not-italic md:text-[46px] sm:text-[40px]",
    text4xl: "text-[20px] font-normal not-italic md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "text", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-pink-800 font-cabin ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };