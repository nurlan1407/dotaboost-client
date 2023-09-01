import React from "react"
import {MmrBoost} from "widgets/mmrBoost";

interface MmrBoostPageProps{

}

const MmrBoostPage:React.FC<MmrBoostPageProps> = ()=>{
    return(
        <div className={'page'}>
            <div className={'wrapper'}>
                <MmrBoost/>
            </div>
        </div>
    )
}

export default MmrBoostPage