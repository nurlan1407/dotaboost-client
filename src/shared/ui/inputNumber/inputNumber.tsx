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
                {order.type === "Boost" && '1'}
                {/* {order.type === "countable" && order.items[0]?.amount} */}
            </span>
            <button className={`${cls.inputNumBtn} ${order.type==="Boost"?cls.notActive:cls.active}`}>+</button>
        </div>
    )
}