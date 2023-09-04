import React, {FC} from 'react';
import cls from "widgets/auth/ui/authModal.module.scss";
import Logo from "shared/ui/logo/logo";
import {LoginUI} from "features/authentification/login";
import {RegisterUI} from "features/authentification/register";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "app/providers/store/store";
import Spinner from "shared/ui/spinner/spinner";
import {showAuthModal} from "app/providers/store/reducers/htmlStates";
import {CloseBtn} from "shared/ui/closeButton/closeButton";

interface ModalProps {
    onClose:()=>void
}

export type AuthOption = "login" | "register" | "recover"

export const AuthModal: FC<ModalProps> = ({ onClose}) => {
    const dispatch = useDispatch()
    const [authOption, setAuthOption] = React.useState<AuthOption>("login");
    return (
        <div className={cls.modal}>
            <div className={cls.modalContent}>
                <CloseBtn  onClick={()=>dispatch(showAuthModal(false))}/>
                {/*<button aria-label='delete item' className={cls.closeBtn} onClick={()=>dispatch(showAuthModal(false))} type='button'>X</button>*/}
                <Logo className={cls.black} />
                {authOption === "login" && <LoginUI/>}
                {authOption === "register" && <RegisterUI/>}
                {authOption === "recover" && <></> }
                <div className={cls.authOptions}>
                    {authOption==="login"
                        ?
                        <a className={cls.authOption} href='#' onClick={()=>setAuthOption("register")}>CREATE ACCOUNT</a>
                        :
                        <a className={cls.authOption} href='#' onClick={()=>setAuthOption("login")}>HAVE AN ACCOUNT?</a>
                    }
                    <a className={cls.authOption} href='#'>RESET PASSWORD</a>
                </div>
            </div>
        </div>
    )
}