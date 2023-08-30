import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";


interface HTMLStates {
    showModal: boolean
};

const initialState: HTMLStates = { showModal: false };

export const htmlStatesSlice = createSlice({
    name:"html",
    initialState:initialState,
    reducers:{
        showAuthModal:(state:HTMLStates, action:PayloadAction<boolean>  ) => {state.showModal = action.payload; }
    }
})

export const {showAuthModal } = htmlStatesSlice.actions;
export default htmlStatesSlice.reducer;



