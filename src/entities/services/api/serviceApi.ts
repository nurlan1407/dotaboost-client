import { createAsyncThunk } from "@reduxjs/toolkit";
import { Service } from "../types";
import { errorResponse } from "entities/types";

export const fetchDota2Services = createAsyncThunk<Array<Service>,any,{rejectValue:errorResponse}>(
    "services/get",
    async (_,thunkApi) => {
        try{
            const response = await fetch("http://localhost:8080/services/get",{
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":"true"
                },
            });
            const data = await response.json();
            if(response.ok===false){
                return thunkApi.rejectWithValue({msg:"Failed to fetch, try later"});
            }
            return data;
        }catch(e){
            return thunkApi.rejectWithValue({msg:"Failed to fetch, try later"});
        }
    }
);



