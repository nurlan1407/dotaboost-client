import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Order} from "entities/order/model/types"
import { LoadingStatus } from "entities/types";
// import {Service} from "shared/config/dotaServices/dotaServices";
import {ServiceInstance} from "widgets/card/types";
import { ConfirmPaypalOrder, createOrder, CreatePaypalOrder, CreateStripeOrder, getOrder } from "../api/orderApi";



interface OrderSliceState {
    orderHistory: Array<Order>,
    order: Order | null,
    currentService: ServiceInstance | null,
    status:LoadingStatus,
    error:string|null
};

const initialState: OrderSliceState = {
    orderHistory: [],
    order: null,
    currentService: null,
    status:"inactive",
    error:null 
};

const increment = createAction<number>('counter/increment')
const OrdersSlice = createSlice({
    name: "ordersSlice",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            state.order = action.payload
        },
        setCurrentService: (state, action: PayloadAction<ServiceInstance>) => {
            state.currentService = action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(createOrder.pending, (state)=>{
            state.status = 'loading'
        }),
        builder.addCase(createOrder.fulfilled, (state, {payload})=>{
            state.order = payload;
            state.status = "fulfilled"
    
        }),
        builder.addCase(createOrder.rejected, (state,{payload})=>{
            state.status = "rejected"
            state.error = payload.msg
        }),



        builder.addCase(getOrder.pending, (state)=>{
            state.status = 'loading'
        }),
        builder.addCase(getOrder.fulfilled, (state, {payload})=>{
            console.log("ASD");
            state.order = payload
            addOrder(payload)
            state.status = "fulfilled"
        }),
        builder.addCase(getOrder.rejected, (state,{payload})=>{
            state.status = "rejected"
            state.error = payload.msg
        })  



        builder.addCase(CreatePaypalOrder.pending, (state)=>{
            state.status = 'loading'
        }),
        builder.addCase(CreatePaypalOrder.fulfilled, (state, {payload})=>{
            
            state.status = "fulfilled"
            state.order = payload
        }),
        builder.addCase(CreatePaypalOrder.rejected, (state,{payload})=>{
            state.status = "rejected"
            state.error = payload.msg
        })





        builder.addCase(ConfirmPaypalOrder.pending, (state)=>{
            state.status = 'loading'
        }),
        builder.addCase(ConfirmPaypalOrder.fulfilled, (state, {payload})=>{
            state.status = "fulfilled"
            if(payload) state.order.payment.status = "Payed"
        }),
        builder.addCase(ConfirmPaypalOrder.rejected, (state,{payload})=>{
            state.status = "rejected"
            state.order = null
            state.error = payload.msg
        })  


        builder.addCase(CreateStripeOrder.pending, (state)=>{
            state.status = 'loading'
        }),
        builder.addCase(CreateStripeOrder.fulfilled, (state, {payload})=>{
            console.log(payload);
            
            state.order = payload.order
            state.status = "fulfilled"
            window.open(payload.link,'_blank')
        }),
        builder.addCase(CreateStripeOrder.rejected, (state,{payload})=>{
            state.status = "rejected"
            state.error = payload.msg
        })  


    }
});

export const {addOrder,setCurrentService} = OrdersSlice.actions;
export default OrdersSlice.reducer;
