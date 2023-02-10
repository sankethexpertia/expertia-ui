import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Caption2=({children,className,...rest})=> {
    const combined = twMerge(" text-xs font-bold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
