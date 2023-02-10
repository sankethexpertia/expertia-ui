import React from 'react'
import { twMerge } from 'tailwind-merge'

export const ButtonSm=({children,className,...rest}) =>{
    const combined = twMerge(" text-xs font-semibold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}
