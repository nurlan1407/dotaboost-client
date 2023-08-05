import React, { FC } from 'react'
import cls from './lowPriority.module.scss'
import Button from 'shared/ui/button/Button'



const MAX_GAMES = 5
const MIN_GAMES = 1
const PRICE_PER_GAME = 2
const HOURS_PER_GAME = 2
const HOURS_TO_FIRST_GAME = 2


export const LowPriority: FC = ({ }) => {
    const [amoutOfGames, setAmountOfGames] = React.useState(MIN_GAMES)
    const [estimatedTime, setEstimatedTime] = React.useState(amoutOfGames===MIN_GAMES?2:amoutOfGames*HOURS_PER_GAME)
    const [estimatedPrice, setEstimatedPrice] = React.useState(amoutOfGames * PRICE_PER_GAME)
    return (
        <div className={cls.lowPriorityContainer}>
            <h2 className={cls.header}>Low Priority</h2>
            <div className={cls.inputContainer}>
                <input type="range" className={cls.inputRange} min="0" max="5" step="1" />
                <h3 className={cls.estimatedPrice}>{amoutOfGames}</h3>
            </div>
            <p className={cls.note}>Select number of the remaining low priority games</p>
            <div className={cls.estimatedPriceBlock}>
                <p className={cls.estimatedTime}>
                    Estimated time for completion <strong>  {estimatedTime} hours</strong>
                </p>
                <h3 className={cls.estimatedPrice}>
                    ${estimatedPrice}
                </h3>
                <Button className={cls.buyBtn} onClick={() => { }}>
                    Buy
                </Button>
            </div>
        </div>

    )
}
