import React, { FC } from 'react'
import cls from './heroSection.module.scss'
import Button from 'shared/ui/button/Button';
import backroundImage from 'public/assets/575863.jpg'

const HeroSection: FC = ({  }) => {
  return (
    <div className={cls.container}>
      <img src={backroundImage} className={cls.background}/>
      {/* <div className={cls.content} style={{backgroundImage:backroundImage}}>
        <h2 className={cls.header}>Dota 2 Boost - Professional Boosting Service</h2>
        <p className={cls.text}>Are you stuck at rank? Use promo code techies40boom and get straight 40% off on your first dota 2 boosting order.</p>
        <p className={cls.text}>MMR-BOOST provides the quickest Dota 2 Boost service.</p>
        <ul className={cls.advantages}>
          <li>24/7 Customer Support</li>
          <li>Order starts in 10 minutes after the payment</li>
          <li>100% Client Satisfaction</li>
        </ul>
        <Button className={cls.btn}>
          Check prices
        </Button>
      </div> */}
      <div className='wrapper'>
        <div className={cls.content}>
          <h1 className={cls.header}>DOTA 2 account boosting</h1>
          <p className={cls.text}>
            We provide a variety of services to increase your rank in Dota 2. Medal and MMR Boosting, Calibration, Coaching and More.
          </p>
          <Button className={cls.btn}>Check Prices</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;