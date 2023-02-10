import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Body1=({children,className,...rest}) =>{
    const combined = twMerge(" text-md font-normal",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
