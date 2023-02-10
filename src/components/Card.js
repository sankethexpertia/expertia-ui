import { twMerge } from "tailwind-merge";
import React from "react";

export const Cards = ({ children,className,...rest }) => {

  const combined = twMerge("p-5 rounded-md shadow border-blue-300", className);

  return (
    <div
      className={combined}
      {...rest}
    >{children}</div>
  );
}
