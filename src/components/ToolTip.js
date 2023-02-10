import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

export const ToolTip = ({ children, className, text, ...rest }) => {
  const combined = twMerge(
    "bg-[#E9E7FA] text-black text-xs px-5 rounded-lg shadow1 p-2",
    className
  );
  return (
    <Tooltip.Provider {...rest}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="">{children}</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={combined} sideOffset={5}>
            {text}
            <Tooltip.Arrow className="fill-gray-100" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
