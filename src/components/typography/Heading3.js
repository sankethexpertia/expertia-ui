import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H3=({children,className,...rest}) =>{
    const combined = twMerge("text-[42px] font-bold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}