import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[14px]",
};
const variants = {
    outline: {
        gray_900_01_pink_400: "border-pink-800 border border-solid bg-graient text-white-a700",
    },
    gradient: {
        black_900_pink_800: "bg-gradient1 text-white-a700",
    },
    fill: {
        black_900_b2: "bg-black-900_b2 text-white-a700_d8",
        pink_800: "bg-pink-800 text-white-a700",
    },
};
const sizes = {
    lg: "h-[56px] px-[34px] text-[30px]",
    xs: "h-[36px] px-8 text-[20px]",
    sm: "h-[38px] px-[34px] text-[15px]",
    md: "h-[44px] px-[34px] text-[20px]",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "md",
    color = "pink_800",
    ...restProps
}) => {
    return (
        <button className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`} {...restProps}>
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["lg", "xs", "sm", "md"]),
    variant: PropTypes.oneOf(["outline", "gradient", "fill"]),
    color: PropTypes.oneOf(["gray_900_01_pink_400", "black_900_pink_800", "black_900_b2", "pink_800"]),
};

export { Button };