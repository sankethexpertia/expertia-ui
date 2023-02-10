import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";

export const Radio = ({ children,color, className, ...rest }) => {
  const colorMerge = twMerge('',color)
  return (
    <form className={className}>
      <RadioGroup.Root
        className="RadioGroupRoot flex flex-col gap-2.5"
        defaultValue="default"
        aria-label="View density"
        {...rest}
      >
        {children.map((e, i) => (
          <div key={i} className="flex items-center">
            <RadioGroup.Item
              className={`relative RadioGroupItem w-5 h-5 bg-white rounded-full border-solid border-[2px] border-gray-300`}
              value={e}
              id={i}
            >

              <RadioGroup.Indicator className={`absolute left-[3px] top-[3px] w-2.5 h-2.5 rounded-2xl ${color?`bg-${color}`:'bg-[#6D5DE7]'}`} />
              <RadioGroup.Indicator
                className={`absolute -left-[12.5%] -top-[12.5%] w-5 h-5 bg-transparent ${color?`text-${color} border-${color}`:'text-[#6D5DE7] border-[#6D5DE7]'} text-[#6D5DE7] rounded-full border-solid border-[2px]  border-[#6D5DE7]`}
              />
              <RadioGroup.Indicator
                className={`absolute -left-[75%] -top-[75%] w-10 h-10 ${color? `hover:bg-${color}/10` :'hover:bg-[#6D5DE7]/10'}  rounded-full`}
              />
            </RadioGroup.Item>
            <label className="Label pl-3" htmlFor={i}>
              {e}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
}
