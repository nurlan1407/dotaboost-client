import {ServiceInstance} from "widgets/card/types";
import MMRBoostImg from 'public/assets/card_mmrBoost.png'
import lowPriorityImg from 'public/assets/card_lowPriority.png'
import behaviourImg from 'public/assets/card_behaviour.png'
import calibrationImg from 'public/assets/card_calibration.png'
import mmrBoostPage from "pages/mmrBoostPage/ui/mmrBoostPage";

export type ServiceType = "Boost"|"countable" //"Boost" has 2 values from and to, countable is type of boost where amount of games is required, each of them will have different renders

export interface MMRBoost extends Service{
    fromMMR:number,
    fromMMRRankImage:string,
    toMMR:number,
    toMMRRankImage:string
}

export interface LowPriority extends Service{
    // amount:number
}
export interface Calibration extends Service{
    // amount:number
}

export interface Service{
    amount?:number
    type:ServiceType
}



export enum DotaServicesTitle{
    MMRBOOST="MMRBoost",
    LOWPRIORITY="Low Priority",
    CALIBRATION="Calibration",
    BEHAVIOURSCORE="Behaviour Score"
}
export const DotaServices:Record<DotaServicesTitle, ServiceInstance> = {
    [DotaServicesTitle.MMRBOOST]:{
        title:"MMRBoost",
        imgUrl:MMRBoostImg
    },
    [DotaServicesTitle.LOWPRIORITY]:{
        title:"Low Priority",
        imgUrl: lowPriorityImg
    },
    [DotaServicesTitle.CALIBRATION]:{
        title:"Calibration",
        imgUrl: calibrationImg
    },
    [DotaServicesTitle.BEHAVIOURSCORE]:{
        title:"Behaviour score",
        imgUrl: behaviourImg
    }
}
