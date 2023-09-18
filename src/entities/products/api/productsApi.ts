import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types";
import { errorResponse } from "entities/types";
import { log } from "console";

export const getProducts = createAsyncThunk<Product[], number, {rejectValue:errorResponse} >("products/getProducts",
    async (number, thunkApi)=>{
        try{
            const response = await fetch(`http://localhost:8080/services/products/${3}`,{
                method:"GET",
            });  
            const data = await response.json();
            if(response.ok === false){
                return thunkApi.rejectWithValue({msg:"failed to fetch"});
            }
            
            return data;
        }catch(e){
            return thunkApi.rejectWithValue(e);
        }
    }
)