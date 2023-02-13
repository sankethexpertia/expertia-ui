import React from "react";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Selector1 = ({ children, className, ...rest }) => {
  const [selection, setSelection] = useState(false);
  const combined = twMerge(
    "text-sm flex justify-start items-center p-2 border-[1px] duration-200 rounded-lg",
    !selection
      ? "border-[#666666] text-black bg-white"
      : "border-[#6D5DE7] text-[#6D5DE7] bg-[#F4F2FF]",
    className
  );
  return (
    <div className="inline-block cursor-pointer ">
      <div
        className={combined}
        {...rest}
        onClick={() => setSelection((e) => !e)}
      >
        <div className="pr-3">
          {!selection ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
