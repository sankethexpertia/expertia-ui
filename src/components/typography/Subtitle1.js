import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Subtitle1=({children,className,...rest})=> {
    const combined = twMerge(" text-md font-semibold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
