import React from "react";
import { twMerge } from "tailwind-merge";

export const DatePicker = ({className,...rest}) =>{

  const combined = twMerge("border border-solid border-gray-200 px-4 py-2 rounded-md text-md font-light" , className )

  return (
    <div>
      <input
        type="date"
        className={combined}
        {...rest}
      />
    </div>

  );
}
