import React from 'react'
import { twMerge } from 'tailwind-merge'

export const H4=({children,className,...rest}) =>{
    const combined = twMerge("text-4xl font-bold",className)
  return (
    <div className={combined} {...rest}>{children}</div>
  )
}