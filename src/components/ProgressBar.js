import React from "react";
import * as Progress from "@radix-ui/react-progress";

export const ProgressBar = ({ className, progress, ...rest}) => {

  return (
    <div className="w-[100%]" {...rest}>
      <Progress.Root className="bg-[#E5E1FF] relative overflow-hidden rounded-[100px] border- w-full h-2.5" value={66}>
        <Progress.Indicator
          className="bg-[#6D5DE7] w-full h-full rounded-full"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
}
