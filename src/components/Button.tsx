import clsx from "clsx"
import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active: boolean
}

export const Button: React.FC<Props> = ({ children, active, ...rest}) => { 
  return <button {...rest} className={clsx('max-h-8 rounded-full px-2',
    {
    'text-white bg-slate-500': active,
    'text-slate-500': !active
  })}>
      {children}</button>
}
