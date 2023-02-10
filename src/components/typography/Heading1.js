import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H1=({children,className,...rest}) =>{
    const combined = twMerge(" text-[64px] leading-[80px] font-bold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
