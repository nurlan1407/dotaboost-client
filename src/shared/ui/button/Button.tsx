import React, { FC } from 'react'
import cls from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

const Button: FC<ButtonProps> = (props) => {
  const { onClick, children } = props
  
  return (
    <button className={cls.button} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button;