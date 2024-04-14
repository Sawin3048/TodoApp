import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active: boolean
}

export const Button: React.FC<Props> = ({ children, active, ...rest}) => { 
  const activeStyle = 'text-white bg-slate-500'
  const desactiveStyle = 'text-slate-500'
    
  return <button {...rest} className={`max-h-8 rounded-full px-2 ${active ? activeStyle : desactiveStyle}` }>
      {children}</button>
  
 }