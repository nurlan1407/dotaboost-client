import {createAsyncThunk} from '@reduxjs/toolkit'
import {LoginFormParams, RegisterFormParams} from "features/authentification/login/model/login";
import {RegisterResponse} from "entities/user/api/types";



export const register = createAsyncThunk<RegisterResponse,RegisterFormParams,{}>(
    "user/register",
    async function (reqBody:RegisterFormParams,{rejectWithValue}){
        try{
            const response =await fetch("http://localhost:4000/user/register",{
                method:"POST",
                    headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":"true"
                },
                body: JSON.stringify(reqBody),
            });
            console.log(response)
            const data = await response.json();
            console.log(data)
            if(response.status !== 200){
                return rejectWithValue((data as RegisterResponse).msg);
            }
            if(response.ok === false){
                throw new Error('Server Error!');
            }
            return data as RegisterResponse;
        }catch (e){
            return rejectWithValue(e.message);
        }
    }
)

export const login = createAsyncThunk<RegisterResponse,LoginFormParams,{}>(
    "user/login",
    async function(reqBody:LoginFormParams,{rejectWithValue}){
        try{
            const response =await fetch("http://localhost:4000/user/login",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":"true"
                },
                body: JSON.stringify(reqBody),
            });
            const data = await response.json();
            console.log(data)
            if(response.status !== 200){
                return rejectWithValue((data as RegisterResponse).msg);
            }
            if(response.ok === false){
                throw new Error('Server Error!');
            }
            return data as RegisterResponse;
        }catch (e){
            return rejectWithValue(e.message)
        }
    }
)
