import React, {FC} from 'react'
import cls from './mainPage.module.scss'
import {Card} from "widgets/card";
import {AppRoutes, RoutePath} from "shared/config/routerConfig/routerConfig";
import mmrBoostCardBg from 'public/assets/card_mmrBoost.png'
import behaviourScoreCardBg from 'public/assets/card_behaviour.png'
import calibrationCardBg from 'public/assets/card_calibration.png'
import lowPriorityCardBg from 'public/assets/card_lowPriority.png'
import {useDispatch} from 'react-redux';
import {fetchDota2Services} from 'entities/services/api/serviceApi';
import {useAppSelector} from "app/providers/store/store";


const MainPage: FC = ({}) => {
    const dispatch = useDispatch();
    const state = useAppSelector((state => state.servicesReducer.list));
    const isLoading = useAppSelector((state) => state.servicesReducer.status);
    const fetchServices = () => {
        // @ts-ignore
        dispatch(fetchDota2Services())
    }
    React.useEffect(() => {
        fetchServices()
    }, [])
    return (
        <div className={cls.mainPage}>
            <div className={'wrapper'}>
                <div className={cls.servicesContainer}>
                    <h3 className={cls.servicesHeader}>Select a service</h3>
                    <div className={cls.servicesList}>
                        {state.map((item) => <Card  key={item.id} img={item.imgLink} title={item.title} link={item.link}></Card>)}
                    </div>
                </div>
            </div>
            <div></div>
            {/*<div className='wrapper'>*/}
            {/*  <div className=''>*/}
            {/*    <MmrBoost/>*/}
            {/*  </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default MainPage;