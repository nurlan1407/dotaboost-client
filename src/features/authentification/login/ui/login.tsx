import React from 'react';
import cls from "widgets/auth/ui/authModal.module.scss";
import Button from "shared/ui/button/Button";
import {useDispatch} from "react-redux";
import {userSlice} from "entities/user/model/slice";
import {useAppSelector} from "app/providers/store/store";
import {LoginFormParams, RegisterFormParams} from "features/authentification/login/model/login";
import {login, register} from "entities/user/api/userApi";
import {showAuthModal} from "app/providers/store/reducers/htmlStates";
export const LoginUI:React.FC = () =>{
    const dispatch = useDispatch();
    const status = useAppSelector(state => state.userReducer.status);
    React.useEffect(()=>{
        dispatch(userSlice.actions.setError(""))
        console.log(status)

    },[])
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const apiError = useAppSelector((state)=>state.userReducer.error);
    if(status==="fulfilled"){
        dispatch(showAuthModal(false))
    }
    const onLoginClicked = async () =>{
        const formParams:LoginFormParams = {
            email:email,
            password:password,
        }
        // register
        // @ts-ignore
        dispatch(login(formParams))
        //if everything okay close modal window

    }

    return(
        <form className={cls.inputContainer}>
            <input className={cls.input} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"></input>
            <input className={cls.input} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"></input>
            <Button className={cls.signUpBtn} onClick={async() => {await onLoginClicked()}}>Sign Up</Button>
            {apiError && <p className={cls.error}>{apiError}</p>}
        </form>
    )
}