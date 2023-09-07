import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cls from './deleteButton.module.scss'
import Button from "shared/ui/button/Button";

interface DeleteButtonProps{
    onCLick:()=>void,
}
export const DeleteButton:React.FC<DeleteButtonProps> = ({onCLick}) =>{
    return(
        // <></>
        <Button className={cls.btn} onClick={onCLick}>
            <strong><i className ="far fa-trash" style={{ color:"black"}}/></strong>
        </Button>
    )
}