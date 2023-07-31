import React, { FC } from 'react'
import cls from './mainPage.module.scss'
import HeroSection from 'widgets/heroSection/ui/heroSection';

interface MainPageProps {
  
}

const MainPage: FC<MainPageProps> = ({  }) => {
  return (
    <div className={cls.mainPage}>
        <HeroSection/>
    </div>
  )
}

export default MainPage;