import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;