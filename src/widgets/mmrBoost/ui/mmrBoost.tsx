import React, { FC } from 'react'
import { Rank } from 'widgets/rank'
import Button from 'shared/ui/button/Button'
import cls from './mrrBoost.module.scss'
//assets
import rank1 from 'public/assets/rank_1.png'
import rank2 from 'public/assets/rank_2.png'

import { Rank as RankObject, ranks } from 'shared/config/mmrBoostConfig/mmrBoostConfig'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { toggleDrawer} from "app/providers/store/reducers/htmlStates";


const MAX_MMR = 8000
const DIVISION = 1000 //как делится в полоске
const DEFAULT_VARIANCE = 80
const MMR_PER_DAY = 250
const PRICE_FOR_MMR = 7

function kak(MMR: number, setRankImage: (rankObj: RankObject) => void) {
    const rank = ranks.filter((item: RankObject) => {
        if (MMR >= item.min && MMR <= item.max) {
            setRankImage(item)
            return
        }
    })
}



export const MmrBoost: FC = ({ }) => {
    const dispatch = useDispatch()
    const [currentMMR, setCurrentMMR] = React.useState(1000)
    const [desiredMMR, setDesiredMMR] = React.useState(5000)
    const [estimatedTime, setEstimatedTime] = React.useState(Math.ceil((desiredMMR - currentMMR)/MMR_PER_DAY))
    const [estimatedPrice, setEstimatedPrice] = React.useState((((desiredMMR - currentMMR)/MMR_PER_DAY) * PRICE_FOR_MMR).toFixed())

    const [currentRankImage, setRankImage] = React.useState<RankObject | null>(null)
    const [desiredRankImage, setDesiredRankImage] = React.useState<RankObject | null>(null)

    function estimateTime(){
        var res = Math.ceil((desiredMMR - currentMMR)/MMR_PER_DAY)
        setEstimatedTime(res)
    }
    function estimatePrice(){
        var res =  ((desiredMMR - currentMMR)/MMR_PER_DAY * PRICE_FOR_MMR).toFixed(2)
        setEstimatedPrice(res)
    }
    React.useEffect(() => {
        fillSlider(currentMMR, desiredMMR)
        kak(currentMMR, setRankImage)
        kak(desiredMMR, setDesiredRankImage)
        estimatePrice()
        estimateTime()
    }, [currentMMR, desiredMMR])


    const add = (term: string) => {
        if (term == '') {
            setCurrentMMR(0)
            return
        }
        const value = parseInt(term)

        if (value <= desiredMMR) {
            setCurrentMMR(value)
        } else {
            setCurrentMMR((desiredMMR - DEFAULT_VARIANCE))
        }

    }
    const add1 = (term: string) => {
        if (term == '') {
            setDesiredMMR(1500)
            return
        }
        const value = parseInt(term)
        if (value > MAX_MMR) {
            setDesiredMMR(MAX_MMR)
            return
        }
        if (value >= currentMMR) {
            setDesiredMMR(value)
        } else {
            setDesiredMMR(currentMMR + DEFAULT_VARIANCE)
        }
    }


    const fillSlider = (first: number, second: number) => {
        //обьект трека и ширина
        const divFill = document.getElementById('fillTracker') as HTMLElement
        const firstQuartile = first; // первый промежуток
        const middleQuartile = Math.abs(second - first) //второй промежуток
        const w = (middleQuartile / MAX_MMR) * 100
        const thirdQuartile = MAX_MMR - second // третий промежуток
        const firstpr = (firstQuartile / MAX_MMR) * 100
        const secondpr = (thirdQuartile / MAX_MMR) * 100
        divFill.style.width = w + "%";
        divFill.style.left = firstpr + "%";
        divFill.style.right = secondpr + "%";
    }

    function onLiClicked(clickedValue: number) {
        if (Math.abs(currentMMR - clickedValue) > Math.abs(desiredMMR - clickedValue)) {
            add1(clickedValue.toString())
        } else {
            add(clickedValue.toString())
        }
    }

    return (
        <div className={cls.mmrContainer}>
            <h2 className={cls.header}>MMR Boost</h2>
            <div className={cls.ranksContainer}>
                <Rank label='Current MMR' value={currentMMR} rankIcon={currentRankImage?.img} changeValue={add} />
                <Rank label='Desired MMR' value={desiredMMR} rankIcon={desiredRankImage?.img} changeValue={add1} />
            </div>
            <div className={cls.range}>
                <div id="fillTracker" className={cls.divFill}></div>
                <div className={cls.divLowerFill}></div>
                <input maxLength={4} type="range" id="lox" className={`lox ${cls.firstRange}`} min="0" max={MAX_MMR} step="20" value={currentMMR} onChange={(e) => add(e.target.value)} />
                <input maxLength={4} type="range" id="pidor" className={`lox ${cls.secondRange}`} min="0" max={MAX_MMR} step="20" value={desiredMMR} onChange={(e) => add1(e.target.value)} />
            </div>
            <div className={cls.rangeLabels2}>
                <span className={cls.identifier} style={{ left: `${0}%`, transform: `translateX(-20%)` }} onClick={() => onLiClicked(0)}>0</span>
                <span className={cls.identifier} style={{ left: `${(DIVISION * 100 / MAX_MMR)}%`, transform: `translateX(-30%)` }} onClick={() => onLiClicked(1000)}>1000</span>
                <span className={cls.identifier} style={{ left: `${DIVISION * 100 / MAX_MMR * 2}%`, transform: `translateX(-25%)` }} onClick={() => onLiClicked(2000)}>2000</span>
                <span className={cls.identifier} style={{ left: `${DIVISION * 100 / MAX_MMR * 3}%`, transform: `translateX(-35%)` }} onClick={() => onLiClicked(3000)}>3000</span>
                <span className={cls.identifier} style={{ left: `${DIVISION * 100 / MAX_MMR * 4}%`, transform: `translateX(-30%)` }} onClick={() => onLiClicked(4000)}>4000</span>
                <span className={cls.identifier} style={{ left: `${DIVISION * 100 / MAX_MMR * 5}%`, transform: `translateX(-50%)` }} onClick={() => onLiClicked(5000)}>5000</span>
                <span className={cls.identifier} style={{ left: `${DIVISION * 100 / MAX_MMR * 6}%`, transform: `translateX(-50%)` }} onClick={() => onLiClicked(6000)}>6000</span>
                <span className={cls.identifier} style={{ left: `${DIVISION * 100 / MAX_MMR * 7}%`, transform: `translateX(-50%)` }} onClick={() => onLiClicked(7000)}>7000</span>
                <span className={cls.identifier} style={{ left: `${DIVISION * 100 / MAX_MMR * 8}%`, transform: `translateX(-50%)` }} onClick={() => onLiClicked(8000)}>8000</span>
            </div>
            <div className={cls.estimatedPriceBlock}>
                <p className={cls.estimatedTime}>
                    Estimated time for completion: <strong className={cls.time}>  {estimatedTime} days </strong>
                </p>
                <h3 className={cls.estimatedPrice}>
                    ${estimatedPrice}
                </h3>
                    <Button className={cls.buyBtn} onClick={()=>{
                        dispatch(toggleDrawer(true))
                    }}>Checkout</Button>
            </div>
        </div>
    )
}
