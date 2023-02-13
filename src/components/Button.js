import React from "react";
import { twMerge } from "tailwind-merge";
import "../../src/index.css";

export const Button = ({ children, className, ...rest }) => {
  const combined = twMerge(
    "text-white bg-[#6D5DE7] hover:bg-primary2 duration-200 font-md rounded-lg text-sm py-2 px-4",
    className
  );

  return (
    <button className={combined} {...rest}>
      {children}
    </button>
  );
};
