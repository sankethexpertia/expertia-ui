import React from "react";
import { twMerge } from 'tailwind-merge'

export const Label = ({ children, className, ...rest }) => {

  const combined = twMerge("text-white bg-[#6D5DE7] hover:bg-primary2 duration-200 text-xs font-bold rounded-lg text-sm py-1 px-3",className)

  return (
    <button className={combined} {...rest}>
      {children}
    </button>
  );
};

