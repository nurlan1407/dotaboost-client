import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from './types';
import {register} from "entities/user/api/userApi";
import {login} from "entities/user/api/userApi";
import {act} from "react-dom/test-utils";

type LoadingStatus = "loading"|"rejected"|"inactive"|"fulfilled";

type sliceState = {
    user:User | null,
    status: LoadingStatus,
    error?:string
};
const initialState:sliceState ={
    user:null,
    status:"inactive"
}

const setError = createAction<string>('setError');


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers :{
        setError :(state,action:PayloadAction<string>) => {state.error = action.payload},
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, { payload }) => {
            state.status = "fulfilled";
            state.user = payload.user;
            state.user.accessToken = payload.accessToken;
            localStorage.setItem("accessToken", state.user.accessToken);
        })
        builder.addCase(register.rejected, (state, action) => {
            console.log(action.payload)
            state.error = action.payload as string;
            state.status = "rejected";
        })
        builder.addCase(register.pending, (state, action)=>{
            state.status = "loading";
        })

        builder.addCase(login.pending, (state, action)=>{
            state.status = "loading";
        })
        builder.addCase(login.fulfilled, (state,action)=>{
            state.status = "fulfilled";
            state.user = action.payload.user;
            state.user.accessToken = action.payload.accessToken;
            localStorage.setItem("accessToken", state.user.accessToken);
        })
        builder.addCase(login.rejected, (state,action)=>{
            console.log(action.payload)
            state.error = action.payload as string;
            state.status = "rejected";
        })
    },
});


export default userSlice.reducer;