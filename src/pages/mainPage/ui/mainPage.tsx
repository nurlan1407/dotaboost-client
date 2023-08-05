import React, { FC } from 'react'
import cls from './mainPage.module.scss'
import HeroSection from 'widgets/heroSection/ui/heroSection';
import { MmrBoost } from 'widgets/mmrBoost';
import { LowPriority } from 'widgets/lowPriority';


const MAX_MMR = 8000
const DIVISION = 1000 //как делится в полоске


const MainPage: FC = ({ }) => {

  return (
    <div className={cls.mainPage}>
      <HeroSection />
      <div className='wrapper'>
        <div className=''>
          <MmrBoost/>
          {/* <LowPriority /> */}
        </div>
      </div>
    </div>
  )
}

export default MainPage;