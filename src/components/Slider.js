import React from "react";
import * as Slider from "@radix-ui/react-slider";
import { twMerge } from "tailwind-merge";

export const Slider1 = ({ children, className, ...rest }) => {

    const combined = twMerge("relative flex items-center w-[500px] rounded-2xl",className)
  return (
    <form>
      <Slider.Root
        className={combined}
        value={rest.value}
        defaultValue={[50]}
        max={100}
        step={1}
        aria-label="Volume"
        {...rest}
      >
        <Slider.Track className="SliderTrack bg-gray-100 relative flex-grow rounded-2xl h-[6px] cursor-pointer">
          <Slider.Range className="SliderRange bg-gray-100 absolute h-[100%] rounded-2xl cursor-pointer" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb block h-5 w-5 rounded-xl bg-[#6D5DE7] shadow-md hover:bg-[#574ab8] duration-200 cursor-pointer" />
      </Slider.Root>
    </form>
  );
}
