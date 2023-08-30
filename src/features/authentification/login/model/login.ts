import {createAsyncThunk} from "@reduxjs/toolkit";


export interface LoginFormParams{
    email: string,
    password:string
}
export interface RegisterFormParams{
    email: string,
    password:string,
    repeatPassword:string
}