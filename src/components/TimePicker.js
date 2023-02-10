import React, { useEffect, useState } from "react";

export const TimePicker = ({  ...rest }) =>{
  let [time, setTime] = useState("01:00AM");

  useEffect(() => {
    rest?.onValueChange?.(time);
  }, [time]);

  const hours = [];
  for (let i = 1; i <= 12; i++) {
    hours.push(
      <option key={i} value={i}>
        {String(i).padStart(2, "0")}
      </option>
    );
  }

  const min = [];
  for (let i = 0; i < 12; i++) {
    min.push(
      <option className="bg-red-300" key={i * 5} value={i * 5}>
        {String(i * 5).padStart(2, "0")}
      </option>
    );
  }
  return (
    <div>
      {/* <div className="container mx-auto my-12 p-12 bg-gray-100"> */}
      <div className="inline-flex text-md border rounded-md p-2 ">
        <select
          name=""
          id=""
          className="px-2 outline-none appearance-none bg-transparent "
          onChange={(e) => {
            setTime(String(e.target.value).padStart(2, "0") + time.slice(2));
          }}
        >
          {hours}
        </select>
        <span className="px-2">:</span>
        <select
          name=""
          id=""
          className="px-2 outline-none appearance-none bg-transparent "
          onChange={(e) => {
            setTime(
              time.slice(0, 3) +
                String(e.target.value).padStart(2, "0") +
                time.slice(5)
            );
          }}
        >
          {min}
        </select>
        <select
          name=""
          id=""
          className="px-2 outline-none appearance-none bg-transparent"
          onChange={(e) => {
            setTime(time.slice(0, 5) + e.target.value);
          }}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}
