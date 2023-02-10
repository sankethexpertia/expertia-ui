import React from "react";
import * as Select from "@radix-ui/react-select";

import { twMerge } from "tailwind-merge";

export const DropDown = ({ children, className, ...rest }) => {

    const combined = twMerge(" border border-solid border-[#D9DEE2] text-gray-500 rounded-lg px-4 py-2 flex justify-center items-center text-sm hover:bg-gray-200 ",className)

    return(
  <Select.Root {...rest} >
    <Select.Trigger className={combined}>
      <Select.Value placeholder={children} />
      <Select.Icon className=" pl-2 text-black">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal className="">
      <Select.Content className="bg-white border-[1px] p-1 rounded-lg">
        <Select.ScrollUpButton className="flex items-center justify-center hover:bg-gray-100">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </Select.ScrollUpButton>
        <Select.Viewport className="">
          <Select.Group>

            <Select.Label className="text-sm text-gray-400 pl-3 m-1" >{children}</Select.Label>
            {rest.items.map((e,i)=>{
                return <SelectItem value={e} key={i}>{e}</SelectItem>
            })}

          </Select.Group>

          {/* <Select.Separator className="SelectSeparator" /> */}
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center hover:bg-gray-100  ">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="hover:bg-[#6D5DE7] hover:text-white text-sm p-1 m-1 flex items-center rounded-md pl-3 "
        {...props}
        onClick={()=>{console.log('qwe')}}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
