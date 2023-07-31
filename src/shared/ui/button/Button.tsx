import React, { FC } from 'react'
import cls from './button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?:string
}

const Button: FC<ButtonProps> = (props) => {
  const { onClick, children , className} = props
  
  return (
    <button className={`${cls.button} ${className?className:''}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button;