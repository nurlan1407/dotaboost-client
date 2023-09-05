import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Order} from "entities/order/model/types"

const initialState:Array<Order> = []

const OrdersSlice = createSlice({
    name:"ordersSlice",
    initialState,
    reducers:{
        addOrder: (state,action:PayloadAction<Order>)=>{
            state.push(action.payload)
        }
    },
    extraReducers:{

    }
})


export default OrdersSlice.reducer
