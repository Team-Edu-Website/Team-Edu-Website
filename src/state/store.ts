// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import type { TypeOf } from "zod/v3";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// أنواع جاهزة للاستخدام
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch
// export type AppDispatch = typeof store.dispatch;
