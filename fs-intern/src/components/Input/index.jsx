import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[14px]",
};
const variants = {
    fill: {
        white_A700_b2: "bg-white-a700_b2 text-pink-800_d8",
    },
};
const sizes = {
    xs: "h-[38px] px-4 text-[15px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "xs",
            color = "white_A700_b2",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label>
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white_A700_b2"]),
};

export { Input };