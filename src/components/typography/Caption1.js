import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Caption1=({children,className,...rest})=> {
    const combined = twMerge(" text-xs font-normal",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
