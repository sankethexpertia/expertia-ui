import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

//deletable  --chip with delete button--
export const Chips = ({
  children,
  className,
  className_deletable,
  deletable,
  avatar,
  ...rest
}) =>{
  let [del, setDel] = useState(true);
  // useEffect(() => console.log(deletable && del), [del]);
  const combined = twMerge(
    " text-sm bg-[#F2EDF4] text-[#222121] px-1.5 py-1.5 rounded-full flex items-center ",
    className
  );

  const combined2 = twMerge(' bg-gray-400 p-0.5 rounded-full text-white cursor-pointer ',className_deletable)
  return (
    <div className="inline-block">
      {del ? (
        <div className={combined} {...rest}>
          {avatar && del ? (
            <div className="w-5 h-5">
              <img src={avatar} className="w-5 h-5 rounded-full " />
            </div>
          ) : (
            ""
          )}
          <span className="px-1.5">{children&&children}</span>
          {deletable && del ? (
            <div
              onClick={() => setDel(false)}
              className={combined2}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
