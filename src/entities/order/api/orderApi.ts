import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../model/types";
import { errorResponse } from "entities/types";

export const createOrder = createAsyncThunk<{},Order,{rejectValue:errorResponse}>("order/createOrder",
    async(_,thunkApi)=>{
        const response = await fetch("order/createOrder",{method:"POST"});
        if(response.ok === false){
            // return thunkApi.rejectWithValue{}
        }  
    }
)