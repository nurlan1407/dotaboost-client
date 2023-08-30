import React from 'react';
import cls from "widgets/auth/ui/authModal.module.scss";
import Button from "shared/ui/button/Button";
import {register} from "entities/user/api/userApi";
import {RegisterFormParams} from "features/authentification/login/model/login";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "app/providers/store/store";
import Spinner from "shared/ui/spinner/spinner";
import {userSlice} from "entities/user/model/slice";
import {showAuthModal} from "app/providers/store/reducers/htmlStates";

const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const RegisterUI:React.FC = () =>{

    const dispatch = useDispatch();
    React.useEffect(()=>{
       dispatch(userSlice.actions.setError(""))
    },[])
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
    const status = useAppSelector(state => state.userReducer.status);
    const apiError = useAppSelector((state)=>state.userReducer.error);

    const onRegisterClick = async () =>{
        if(!emailRegexp.test(email)){
            dispatch(userSlice.actions.setError("Email is not valid"))
            return
        }
        if(password.length <6){
            dispatch(userSlice.actions.setError("Password Length less than 6"))
            return;
        }
        if(passwordConfirmation !== password){
            dispatch(userSlice.actions.setError("Passwords do not match"))
            return;
        }
        const formParams:RegisterFormParams = {
            email:email,
            password:password,
            repeatPassword:passwordConfirmation
        }
        // register
        // @ts-ignore
        dispatch(register(formParams))
        //if everything okay close modal window
        if(status=== 'fulfilled'){
            dispatch(showAuthModal(false))
        }
    }
    return(
        <form className={cls.inputContainer}>
            <input className={cls.input} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email"></input>
            <input className={cls.input} type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}></input>
            <input className={cls.input} type="password" placeholder="Confirm Password" onChange={e=>setPasswordConfirmation(e.target.value)}></input>
            <Button className={cls.signUpBtn} onClick={async()=>{await onRegisterClick()}}>{status==="loading" ? <Spinner/>:"Register"}</Button>
            {apiError && <p className={cls.error}>{apiError}</p>}
        </form>
    )
}