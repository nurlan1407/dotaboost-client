import React from 'react'
import {MmrBoost} from "widgets/mmrBoost"
import {LowPriority} from "widgets/lowPriority"
import cls from './lowPriority.module.scss'
interface LowPriorityPageProps{

}
const LowPriorityPage:React.FC<LowPriorityPageProps> =()=>{

    return(
        <div className={`page ${cls.lowPriority}`}>
            <div className={'wrapper'}>
                <LowPriority/>
            </div>
        </div>
    )
}

export default LowPriorityPage
