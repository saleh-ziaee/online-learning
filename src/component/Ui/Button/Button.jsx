import React from 'react';
import "./Button.css"
import PropTypes from "prop-types";



const sizes = {
  md: "p-4",
  sm: "px-4 py-2.5",
};

function Button({
  className,
  variant = "fill",
  children,
  size = "md",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`${className} ${variants[variant]} ${sizes[size]} flex justify-center text-center items-center gap-4 rounded-xl cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
