import React from "react";
import { twMerge } from "tailwind-merge";

export const Toast = ({
  className,
  label,
  children,
  open,
  setOpen,
  position,
  time,
}) => {
  const handleClick = () => {
    setOpen(true);
    setTimeout(
      () => {
        setOpen(false);
      },
      time ? time : 4000
    );
  };
  let c1 = "left-0 bottom-0";
  let c2 = "-translate-x-full opacity-0";
  let c3 = "translate-x-0 opacity-100";

  switch (position) {
    case "top": {
      c1 = "left-1/2 top-0";
      c2 = "-translate-y-full opacity-0";
      c3 = "translate-y-0 opacity-100";
      break;
    }
    case "topRight": {
      c1 = "right-0 top-0";
      c2 = "translate-x-full opacity-0";
      c3 = "-translate-x-0 opacity-100";
      break;
    }
    case "topLeft": {
      c1 = "left-0 top-0";
      c2 = "-translate-x-full opacity-0";
      c3 = "translate-x-0 opacity-100";
      break;
    }
    case "bottom": {
      c1 = "left-1/2 bottom-0";
      c2 = "translate-y-full opacity-0";
      c3 = "-translate-y-0 opacity-100";
      break;
    }
    case "bottomRight": {
      c1 = "right-0 bottom-0";
      c2 = "translate-x-full opacity-0";
      c3 = "-translate-x-0 opacity-100";
      break;
    }
    default: {
      c1 = "left-0 bottom-0";
      c2 = "-translate-x-full opacity-0";
      c3 = "translate-x-0 opacity-100";
    }
  }

  let combined = twMerge("p-2 bg-primary1 text-white rounded-md", className);

  return (
    <div>
      <button className={combined} onClick={handleClick}>
        {label}
      </button>

      <div
        className={`fixed ${c1} p-4 m-4  rounded-md duration-200 transform z-50
  ${!open ? c2 : c3}`}
      >
        <span>{children}</span>
      </div>
    </div>
  );
};

