import PropTypes from "prop-types";

const variants = {
  fill: "hover:bg-[#9988aa] bg-black text-white",
  outline: "bg-[#E6E6E6] border border-[#F1F1F1]  ",
  gray: "bg-[#F5F5F5] text-[#3E3232BF]",
};

const sizes = {
  md: "p-4 px-16",
  sm: "px-4 py-2.5",
};

function Button({
  className,
  onclick,
  variant = "fill",
  children,
  size = "md",
  type = "button",
  ...props
}) {
  return (
    <button
      onClick={onclick}
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
