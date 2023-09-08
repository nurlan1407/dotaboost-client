import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Order} from "entities/order/model/types"
import {Service} from "shared/config/dotaServices/dotaServices";
import {ServiceInstance} from "widgets/card/types";


interface OrderSliceState {
    orderHistory: Array<Order>,
    basketOrder: Order | null,
    currentService: ServiceInstance | null
}

const initialState: OrderSliceState = {
    orderHistory: [],
    basketOrder: null,
    currentService: null
}

const increment = createAction<number>('counter/increment')
const OrdersSlice = createSlice({
    name: "ordersSlice",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            state.basketOrder = action.payload

        },
        setCurrentService: (state, action: PayloadAction<ServiceInstance>) => {
            state.currentService = action.payload
        }
    },
    extraReducers: {}
})

export const {addOrder,setCurrentService} = OrdersSlice.actions
export default OrdersSlice.reducer
