import React, { FC } from 'react'
import cls from './calibration.module.scss'
import Button from 'shared/ui/button/Button'
import {InputRange} from "widgets/inputRange/ui/inputRange";
import {DotaServices} from "shared/config/dotaServices/dotaServices";
import {Order} from "entities/order/model/types";
import {toggleDrawer} from "app/providers/store/reducers/htmlStates";
import {addOrder, setCurrentService} from "entities/order/model/slice";
import {useDispatch} from "react-redux";
import { Product } from 'entities/products/types';


const MAX_GAMES = 5
const MIN_GAMES = 1
const PRICE_PER_GAME = 2
const HOURS_PER_GAME = 2
const HOURS_TO_FIRST_GAME = 2

interface CalibraionProps{
    productsList:Product[] 
}

export const Calibraion: FC<CalibraionProps> = ({ productsList }) => {
    const dispatch = useDispatch()
    dispatch(setCurrentService(DotaServices["Calibration"]))
    const [lowerDivWidth, setLowerDivWidth ] = React.useState(0)
    const [amoutOfGames, setAmountOfGames] = React.useState(MIN_GAMES)
    const [estimatedTime, setEstimatedTime] = React.useState(amoutOfGames===MIN_GAMES?2:amoutOfGames*HOURS_PER_GAME)
    const [estimatedPrice, setEstimatedPrice] = React.useState(amoutOfGames * PRICE_PER_GAME)
    return (
        <div className={cls.calibrationContainer}>
            <h2 className={cls.header}>Calibration</h2>
            <div className={cls.rangeContainer}>
                <div className={cls.inputContent}>
                    <InputRange
                        min={MIN_GAMES}
                        max={MAX_GAMES}
                        step={1}
                        value={amoutOfGames}
                        onValueChange={(num)=>setAmountOfGames(num)}
                    />
                </div>
                <div className={cls.productsContainer}>
                    {productsList.map((item)=>(
                        <div className={cls.card} key={item.productId}>
                            <img src={item.imgUrl} className={cls.cardImg}></img>
                            <div className={cls.cardTitle}>{item.name}</div>
                        </div>
                    ))
                    }
                </div>
                <div className={cls.gameAmount}>{amoutOfGames}</div>
            </div>
            <div className={cls.estimatedPriceBlock}>
                <div className={cls.recomendation}>Select number of the remaining low priority <br></br> games </div>
                <div className={cls.estimatedTime}>
                    Estimated time for completion:&nbsp;&nbsp; <strong style={{color:"#2CA8FF"}}>  {estimatedTime} hours</strong>
                </div>
                <div className={cls.estimatedPrice}>
                    ${estimatedPrice}
                </div>
                <Button className={cls.buyBtn} onClick={() => {
                    // const lowPriority:LowPriorityType={
                    //     amount:amoutOfGames,
                    //     type:"countable"
                    // }
                    // const newOrder:Order ={
                    //     status:"UnPayed",
                    //     service: lowPriority,
                        
                    // }
                    dispatch(toggleDrawer(true))
                    // dispatch(addOrder(newOrder))
                }}>
                    Checkout
                </Button>
            </div>
        </div>
    )
}
