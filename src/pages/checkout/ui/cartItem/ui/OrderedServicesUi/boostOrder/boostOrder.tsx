import React from "react"
import cls from './boostOrder.module.scss'
import {MMRBoost, Order} from "entities/order/model/types";
interface BoostOrderProps{
    order:MMRBoost
}


export const BoostOrder:React.FC<BoostOrderProps> = (props) =>{
    const {order} = props

    return(
        <div className={cls.boostOrderWrapper}>
            <div className={cls.rank}>
                <img src={order.fromMMRRankImage} className={cls.rankImage}/>
                <div className={cls.rankValue}>{props.order.fromMMR}</div>
            </div>
            <>----</>
            <div className={cls.rank}>
                <img src={order.toMMRRankImage} className={cls.rankImage}/>
                <div className={cls.rankValue}>{props.order.toMMR}</div>
            </div>
        </div>
    )
}