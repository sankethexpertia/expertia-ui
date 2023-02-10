import React from 'react'
import { twMerge } from 'tailwind-merge'

export const ButtonMd=({children,className,...rest})=> {
    const combined = twMerge(" text-sm font-semibold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
