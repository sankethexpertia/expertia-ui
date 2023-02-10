import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H2=({children,className,...rest})=> {
    const combined = twMerge("text-[56px] font-bold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}