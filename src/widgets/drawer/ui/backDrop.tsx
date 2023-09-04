import React from 'react'
import cls from './backdrop.module.scss'

interface BackDropProps{
    closeDrawer:()=>void
}
export const BackDrop:React.FC<BackDropProps> = ({closeDrawer}) =>{
    return (
        <div className={cls.backDrop} onClick={()=>closeDrawer()}></div>
    )
}