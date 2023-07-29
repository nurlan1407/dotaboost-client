import React, { FC } from 'react'
import cls from './logo.module.scss'

const Logo: FC = () => {
  return (
    <div className={cls.logoContainer}>
        {/* <img></img> */}
        <h1 className={cls.logoText}>DotaBoost</h1>
    </div>
  )
}

export default Logo;