import React, { FC, useEffect } from 'react';
import cls from './authModal.module.scss';
import Logo from 'shared/ui/logo/logo';
import Button from 'shared/ui/button/Button';
import {CloseBtn} from "shared/ui/closeButton/closeButton";


type AuthMode = 'login' | 'register';
interface ModalProps {
    onClose:()=>void
}



export const AuthModal: FC<ModalProps> = ({ onClose}) => {
    return (
        <div className={cls.modal}>
            <div className={cls.modalContent}>
                <CloseBtn onClick={()=>{onClose()}}/>
                {/*<button aria-label='delete item' className={cls.closeBtn} onClick={()=>onClose()} type='button'>X</button>*/}
                <Logo className={cls.black} />
                {/*<form className={cls.inputContainer}>*/}
                {/*    <input className={cls.input} type="email" placeholder="Email"></input>*/}
                {/*    <input className={cls.input} type="password" placeholder="Password"></input>*/}
                {/*    <Button className={cls.signUpBtn} onClick={() => { }}>Sign Up</Button>*/}
                {/*</form>*/}
                <div className={cls.authOptions}>
                    <a className={cls.authOption} href='#' onClick={()=>{}}>CREATE ACCOUNT</a>
                    <a className={cls.authOption} href='#'>RESET PASSWORD</a>
                </div>
            </div>
        </div>
    )
}
