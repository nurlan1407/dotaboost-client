import React from 'react'
import cls from '../../card/ui/card.module.scss'
import {Link} from "react-router-dom";
import {CartItemProps} from "../types"
import {Rank as RankObject} from "shared/config/mmrBoostConfig/mmrBoostConfig"

export const MMRBoostCartItem :React.FC<CartItemProps>= (props, context)=>{
    const { onDeleteClicked, order, item} = props
    const [currentRankImage, setRankImage] = React.useState<RankObject | null>(null)
    const [desiredRankImage, setDesiredRankImage] = React.useState<RankObject | null>(null)

    return(
        <div className={cls.cartContainer}>
            
        </div>
    )
}

