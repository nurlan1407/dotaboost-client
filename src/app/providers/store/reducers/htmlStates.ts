import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";


interface HTMLStates {
    showModal: boolean,
    showDrawer: boolean
};

const initialState: HTMLStates = { showModal: false, showDrawer: false };

export const htmlStatesSlice = createSlice({
    name:"html",
    initialState:initialState,
    reducers:{
        showAuthModal:(state:HTMLStates, action:PayloadAction<boolean>  ) => {state.showModal = action.payload; },
        toggleDrawer:(state,action:PayloadAction<boolean>)=>{state.showDrawer = action.payload},
    }
})

export const {showAuthModal,toggleDrawer } = htmlStatesSlice.actions;
export default htmlStatesSlice.reducer;