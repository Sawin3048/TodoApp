import React from "react"

interface Props extends React.DOMAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active: boolean
}

export const Button: React.FC<Props> = ({ children, active, ...rest}) => { 
  const activeStyle = 'text-slate-100 bg-slate-500'
  const desactiveStyle = 'text-slate-500'
    
  return <button {...rest} className={`rounded-full px-2 ${active ? activeStyle : desactiveStyle}` }>
      {children}</button>
  
 }