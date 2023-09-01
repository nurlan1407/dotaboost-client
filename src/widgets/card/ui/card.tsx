import React from 'react'
import cls from './card.module.scss'
import {Link} from "react-router-dom";

interface CardProps{
    title:string,
    link:string,
    img:string
}
export const Card :React.FC<CardProps>= ({title, link, img})=>{
    return(
        <div className={cls.cardContainer}>
            <Link to={link}>
                <div className={cls.cardContent}>
                    <img className={cls.cardBackground} src={img}></img>
                    <div className={cls.titleContainer}>
                        <p className={cls.cardTitle}>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

