import { configureStore } from "@reduxjs/toolkit";
import htmlReducer from "./reducers/htmlStates";
import userReducer from "entities/user/model/slice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    htmlStatesReducer: htmlReducer,
    userReducer: userReducer
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
