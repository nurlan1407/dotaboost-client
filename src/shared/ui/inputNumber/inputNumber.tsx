import React from 'react'
import cls from "./inputNumber.module.scss";
import {Order} from "entities/order/model/types";


interface InputNumberProps{
    order:Order,
    onIncrement:()=>void,
    onDecrement:()=>void
}

export const InputNumber:React.FC<InputNumberProps> = ({order}) =>{

    return(
        <div className={cls.inputNumber}>
            <button className={cls.inputNumBtn}>-</button>
            <span className={cls.value}>
                {order.service.type === "Boost" && '1'}
                {order.service.type === "countable" && order.service.amount}
            </span>
            <button className={`${cls.inputNumBtn} ${order.service.type==="Boost"?cls.notActive:cls.active}`}>+</button>
        </div>
    )
}