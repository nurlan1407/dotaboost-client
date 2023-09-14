import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Order } from "entities/order/model/types"
import { LoadingStatus } from "entities/types";
import { ServiceInstance } from "widgets/card/types";
import { fetchDota2Services } from "../api/serviceApi";
import { Service } from "../types";

type ServicesState = {
    status: LoadingStatus,
    error: null | string,
    list: Array<Service>,
}
const initialState: ServicesState = {
    status: "inactive",
    list: [],
    error: null
}

const ServicesSlice = createSlice({
    name: "ordersSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchDota2Services.pending, (state) => {
            state.status = "loading",
                state.error = null
        }),
         builder.addCase(fetchDota2Services.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.status = "inactive";
        });
        builder.addCase(fetchDota2Services.rejected,(state, { payload }) => {
            if (payload) state.error = payload.msg;
                state.status = "inactive";
        });
    }
});

export default ServicesSlice.reducer;
