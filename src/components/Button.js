import React from "react";
import { twMerge } from "tailwind-merge";
import "../../src/index.css";

export const Button = ({ children, className, small, secondary, disabled,icon, ...rest }) => {
  const combined = twMerge(
    ` ${
      secondary
        ? "border border-[#6D5DE7] text-[#6D5DE7] hover:text-[#4B4295] hover:border-[#4B4295] bg-white "
        : " bg-[#6D5DE7] hover:bg-[#4B4295] text-white "
    }  duration-200 rounded-[4px]  ${
      small
        ? " text-sm px-4 py-2.5 font-medium "
        : " text-md  py-4 px-6 font-semibold "
    } `,`${disabled?` ${secondary?"border-[#B6AEF3] hover:border-[#B6AEF3] hover:text-[#B6AEF3] text-[#B6AEF3]":"bg-[#B6AEF3] hover:bg-[#B6AEF3]"} cursor-not-allowed`:"  "}`,
    className
  );

  return (
    <button className={combined} {...rest}>
      {children}
    </button>
  );
};
