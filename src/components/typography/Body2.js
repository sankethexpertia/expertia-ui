import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Body2=({children,className,...rest})=> {
    const combined = twMerge(" text-sm font-normal",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
