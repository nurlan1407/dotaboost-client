import React, { FC } from 'react'
import cls from './heroSection.module.scss'
import Button from 'shared/ui/button/Button';
import backroundImage from 'public/assets/575863.jpg'
import 'app/styles/app.scss'
import BtnIcon from 'public/assets/icon-cup.svg'

const HeroSection: FC = ({  }) => {
  return (
    <div className={cls.container}>
      <div className='wrapper'>
      <img src={backroundImage} className={cls.background}/>
        <div className={cls.content}>
          <h1 className={cls.header}>DOTA 2 account boosting</h1>
          <p className={cls.text}>
            We provide a variety of services to increase your rank in Dota 2. Medal and MMR Boosting, Calibration, Coaching and More.
          </p>
          {/* <Button className={cls.btn}>Check Prices</Button> */}
        </div>
      </div>
      <div className={cls.offers}>
          <button className={cls.btn}>
             <BtnIcon /> &nbsp;MMR Boost
          </button>
          <button className={cls.btn}> <BtnIcon /> &nbsp;Low Priority</button>
          <button className={cls.btn}> <BtnIcon /> &nbsp;Calibration Boost</button>
          <button className={cls.btn}> <BtnIcon /> &nbsp;Behaviour Score</button>
      </div>
    </div>
  )
}

export default HeroSection;