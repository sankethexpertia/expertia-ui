import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";

export const Checkbox1 = ({ className, ...rest }) => {
  const [checked, setChecked] = React.useState(false);

  const combined = twMerge(
    checked
      ? "bg-[#6D5DE7] border-solid border-[1px] border-primary2"
      : "bg-gray-100 border-solid border-[1px] border-gray-300",
    "flex justify-center items-center w-4 h-4 text-white rounded",
    className
  );

  // useEffect(() => console.log(checked), [checked]);
  return (
    <div className="">
      <form>
        <Checkbox.Root
          checked={checked}
          onCheckedChange={() =>
            setChecked((e) => {
              if (e === true) return false;
              else return true;
            })
          }
          className={combined}
          // defaultChecked
          {...rest}
        >
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </form>
    </div>
  );
};
