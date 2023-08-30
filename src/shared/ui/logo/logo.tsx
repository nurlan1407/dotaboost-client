import React, { FC } from 'react'
import cls from './logo.module.scss'


interface props{
  className?:string
}

const Logo: FC<props> = ({className}) => {
  
  return (
    <div className={` ${cls.logoContainer} `}>
        {/* <img></img> */}
        <h1 className={`${cls.logoText} ${className}`}>DotaBoost</h1>
    </div>
  )
}

export default Logo;