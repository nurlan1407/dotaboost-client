import React, { FC, useEffect } from 'react'
import cls from './rank.module.scss'

interface RankProps {
    label: string
    value: number
    rankIcon: string
    changeValue: (value:string)=>void
}



export const Rank: FC<RankProps> = ({ label, value, rankIcon,changeValue }) => {
    const inputRef = React.useRef(null)
    React.useEffect(()=>{
        const element = inputRef.current
        element.addEventListener('click', (e:Event)=>{console.log((e.target as HTMLInputElement).select())})
        return () => {
            element.removeEventListener('click', ()=>{});
          };
    },[])
    

    
   


    return (
        <div className={`${cls.rank}`}>
            <p className={cls.label}>{label}</p>
            <input className={cls.mmrBlock} id='inp' type='number' min={0} max={8000} 
                value={value} 
                onChange={(e)=>{changeValue(e.target.value[0]=='0'?e.target.value[1]:e.target.value )}}  ref={inputRef}
             />
            <img src={rankIcon} className={cls.rankIcon}></img>
            <h3></h3>
        </div>
    )
}
