import React from "react"
import cls from "./closeButton.module.scss"
interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    onClick: ()=>void,
}

export const CloseBtn:React.FC<CloseButtonProps> = ({ onClick, className }) =>{
    return(
        <button aria-label='delete item' className={`${cls.closeBtn} ${className}`} onClick={()=>onClick()} type='button'>X</button>
    )
}