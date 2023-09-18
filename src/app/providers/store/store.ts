import { configureStore } from "@reduxjs/toolkit";
import htmlReducer from "./reducers/htmlStates";
import userReducer from "entities/user/model/slice";
import orderReducer from "entities/order/model/slice";
import servicesReducer from "entities/services/model/slice";
import productReducer from "entities/products/model/slice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    htmlStatesReducer: htmlReducer,
    userReducer: userReducer,
    orderReducer: orderReducer,
    servicesReducer: servicesReducer,
    productReducer:productReducer
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
