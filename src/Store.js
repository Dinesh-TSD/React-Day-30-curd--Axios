import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Reducers/UserReducer";

export const store = configureStore({
    reducer: {
        app: UserSlice.reducer
    },
})