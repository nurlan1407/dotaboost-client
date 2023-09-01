import React, { FC } from 'react'
import cls from './mainPage.module.scss'
import {Card} from "widgets/card";
import {AppRoutes, RoutePath} from "shared/config/routerConfig/routerConfig";



import mmrBoostCardBg from 'public/assets/card_mmrBoost.png'
import behaviourScoreCardBg from 'public/assets/card_behaviour.png'
import calibrationCardBg from 'public/assets/card_calibration.png'
import lowPriorityCardBg from 'public/assets/card_lowPriority.png'
import Navbar from "widgets/navbar/ui/navbar";


const MainPage: FC = ({ }) => {
  return (
    <div className={cls.mainPage}>
        <div className={'wrapper'}>
            <div className={cls.servicesContainer}>
                <h3 className={cls.servicesHeader}>Select a service</h3>
                <div className={cls.servicesList}>
                    <Card img={mmrBoostCardBg} title={"MMR BOOST"} link={RoutePath.mmr}></Card>
                    <Card img={lowPriorityCardBg} title={"MMR BOOST"} link={RoutePath.mmr}></Card>
                    <Card img={calibrationCardBg} title={"MMR BOOST"} link={RoutePath.mmr}></Card>
                    <Card img={behaviourScoreCardBg} title={"MMR BOOST"} link={RoutePath.mmr}></Card>
                </div>
            </div>
        </div>
      <div ></div>
      {/*<div className='wrapper'>*/}
      {/*  <div className=''>*/}
      {/*    <MmrBoost/>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default MainPage;