import React from 'react'
import cls from './indicator.module.scss'
interface StepIndicatorProps{
    step:number,
    className:string
}

export const StepIndicator:React.FC<StepIndicatorProps> = ({step,className}) => {
    return(
        <div className={`${cls.circle} ${className}`}>
            {step}
        </div>
    )
}