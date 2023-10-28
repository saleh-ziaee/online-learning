import React, {Children} from 'react';
import "./Button.css"

import PropTypes from "prop-types";

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
      className={`${className} ${variants[variant]} ${sizes[size]} flex text-center items-center gap-4 rounded-xl cursor-pointer`}
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
