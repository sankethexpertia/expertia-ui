import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";

export const Avatar1 = ({ avatar, className, ...rest }) => {
  let combined = twMerge("w-10 h-10 rounded-full", className);

  return (
    <div>
      <div className="flex">
        <Avatar.Root className={combined} {...rest}>
          <Avatar.Image
            className="w-full h-full object-cover rounded-full"
            src={avatar}
            alt="Colm Tuite"
          />
        </Avatar.Root>
      </div>
    </div>
  );
};
