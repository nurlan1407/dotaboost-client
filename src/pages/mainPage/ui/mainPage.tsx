import React, { FC } from 'react'
import cls from './mainPage.module.scss'
import HeroSection from 'widgets/heroSection/ui/heroSection';
import { MmrBoost } from 'widgets/mmrBoost';

const MAX_MMR = 8000
const DIVISION = 1000 //как делится в полоске


const MainPage: FC= ({ }) => {

  return (
    <div className={cls.mainPage}>
      <HeroSection />
      <div className='wrapper'>
        <MmrBoost/>
      </div>
    </div>
  )
}

export default MainPage;