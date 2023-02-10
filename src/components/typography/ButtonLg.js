import React from 'react'
import { twMerge } from 'tailwind-merge'

export const ButtonLg=({children,className,...rest})=> {
    const combined = twMerge(" text-md font-semibold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
