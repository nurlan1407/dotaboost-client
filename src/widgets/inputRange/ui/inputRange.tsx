import React from "react"
import cls from './inputRange.module.scss'

interface InputRangeProps{
    value:number,
    onValueChange: (value:number)=>void,
    min:number,
    max:number,
    step:number,
}

export const InputRange:React.FC<InputRangeProps> =({value,onValueChange, min, max,step})=>{
    return(
        <div className={cls.inputContainer}>
            <input
                className={cls.customInputRange}
                type={"range"}
                value={value}
                onChange={(e)=>onValueChange(parseInt(e.target.value))}
                min={min}
                max={max}
                step={step}
            >
            </input>
        </div>

    )
}
