import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Subtitle2=({children,className,...rest}) =>{
    const combined = twMerge(" text-sm  font-semibold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
