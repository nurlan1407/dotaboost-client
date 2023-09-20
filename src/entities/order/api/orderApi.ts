import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../model/types";
import { errorResponse } from "entities/types";

export type AccountCredentials = {
    orderId:string,
    email:string,
    password:string,
    steamId:string,
    fromMMR?:number,
    toMMR?:number
}

export const createOrder = createAsyncThunk<Order,Order,{rejectValue:errorResponse}>("order/createOrder",
    async(order:Order,thunkApi)=>{
        try{
            const response = await fetch("http://localhost:8080/order/create",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":"true"
                },
                body:JSON.stringify(order)
            })
            
                 console.log("create order api call");
            const data = await response.json()
            console.log(data);
            
            if(response.status===404){
                return thunkApi.rejectWithValue({msg:data.msg})
            }
            if(response.ok === false){
                return thunkApi.rejectWithValue({msg:"Failed to create order"})
            } 
            
            return data
        }catch(e){
            return thunkApi.rejectWithValue({msg:e})
        }
    }
)


export const getOrder = createAsyncThunk<Order,string,{rejectValue:errorResponse}>("order/getOrder",
    async(orderId:string, thunkApi)=>{
        try{
            const response = await fetch(`http://localhost:8080/order/get/${orderId}`,{
                method:"GET",
            });
            const data = await response.json()
            if(response.ok === false){
                return thunkApi.rejectWithValue({msg:"Failed to create order"})
            } 
            console.log("get order api call");
            
            return data
        }catch(e){
            return thunkApi.rejectWithValue({msg:e})
        }
    }
)

export const CreatePaypalOrder = createAsyncThunk<Order,AccountCredentials,{rejectValue:errorResponse}>(
    "order/payment/create",
    async(reqBody:AccountCredentials, thunkApi)=>{
        try{
            // console.log(reqBody);
            
            const response = await fetch(`http://localhost:8080/order/payment/create`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":"true"
                },
                body:JSON.stringify(reqBody)
            });
            const data = await response.json();
            // console.log(data);
            console.log("create payment api call");
            
            if(response.ok === false){
                return thunkApi.rejectWithValue({msg:"Failed to create order"})
            } 
            return data
        }catch(e){
            return thunkApi.rejectWithValue({msg:e})
        }
    }
)


export const ConfirmPaypalOrder = createAsyncThunk<boolean, string,{rejectValue:errorResponse}>(
    "order/payment/confirm",
    async(orderId:string, thunkApi) => {
        try{
            const response = await fetch(`http://localhost:8080/order/payment/capture/${orderId}`,{
                method:"POST",
            });
            const data = await response.json();
            // console.log(data);
            console.log("confirm payment api call");
            if(response.ok === false){
                return thunkApi.rejectWithValue({msg:"Failed to capture paypal payment"})
            } 
            return data
        }catch(e){
            return thunkApi.rejectWithValue({msg:e})
        }
    }
    
    )