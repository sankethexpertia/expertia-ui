import React from "react";
import { useState, useEffect } from "react";

export const Pagination = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  className,
  color,
  ...rest
}) => {


  function pagination(crr, total) {
    let arr = [];

    if (total < 7) {
      for (let i = 0; i < total ; i++) {
        arr.push(i + 1);
      }
      return arr;
    } else {
      for (let i = 0; i < 7; i++) {
        arr.push(i + 1);
      }
      arr[6] = total;

      if (arr[6] - 1 !== arr[5]) {
        arr[5] = "...";
      }
      if (arr[4] + 2 == arr[6]) {
        arr[5] = arr[6] - 1;
      }
      if (crr >= total - 2) {
        arr[1] = "...";
        arr[2] = total - 4;
        arr[3] = total - 3;
        arr[4] = total - 2;
        arr[5] = total - 1;
        arr[6] = total;
      }

      if (crr > 4 && crr < total - 2) {
        arr[1] = "...";
        arr[2] = crr - 1;
        arr[3] = crr;
        arr[4] = crr + 1;
        arr[5] = "...";
      }

      return arr;
    }
  }


  return (
    <div className="inline-block">
      <div
        //   onClick={() => console.log(currentPage)}
        className="flex gap-2 rounded-md "
        aria-label="Pagination"
      >
        <div
          onClick={() => {
            onPrev((e) => {
              if (e == 1) return e;
              return e - 1;
            });
          }}
          href="#"
          className="relative z-10 items-center border border-gray-400 bg-gray-50 w-10 h-10 flex justify-center text-sm font-medium text-gray-600 focus:z-20 rounded-3xl"
        >
          <span className="sr-only">Previous</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        {pagination(currentPage, totalPages)?.map((e, i) => {
          return (
            <div key={i}>
              <div
                onClick={() => (e !== "..." ? onPrev(e) : "")}
                href="#"
                //   aria-current="page"
                className={`relative z-10 items-center border ${
                  e == currentPage
                    ? "bg-[#6D5DE7] text-white border-[#6D5DE7]"
                    : "border-gray-400 bg-purple-50 text-black"
                } w-10 h-10 flex justify-center text-sm font-medium focus:z-20 rounded-3xl `}
              >
                {e}
              </div>
            </div>
          );
        })}
        <div
          onClick={() => {
            onNext((e) => {
              if (e == totalPages) return e;
              return e + 1;
            });
          }}
          href="#"
          className="relative z-10 items-center border border-gray-400 bg-gray-50 w-10 h-10 flex justify-center text-sm font-medium text-gray-600 focus:z-20 rounded-3xl"
        >
          <span className="sr-only">Previous</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
