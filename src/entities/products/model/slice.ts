import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Order } from "entities/order/model/types"
import { LoadingStatus } from "entities/types";
import { ServiceInstance } from "widgets/card/types";
import { Product } from "../types";
import { getProducts } from "../api/productsApi";


type ProductSliceState = {
    status: LoadingStatus,
    error: null | string,
    list: Array<Product>,
    selectedProduct: Product|null,
}
const initialState: ProductSliceState = {
    status: "inactive",
    list: [],
    error: null,
    selectedProduct:null
}

const ProductsSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        selectProduct:(state,payload:PayloadAction<Product>)=>{
            state.selectedProduct = payload.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.status = "loading",
                state.error = null
        }),
         builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.status = "inactive";
        });
        builder.addCase(getProducts.rejected,(state, { payload }) => {
            if (payload) state.error = payload.msg;
                state.status = "inactive";
        });
    }
});

export const {selectProduct} = ProductsSlice.actions;
export default ProductsSlice.reducer;
