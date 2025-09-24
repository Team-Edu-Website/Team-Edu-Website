// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import lessonReducer from "../state/LessonState";

export const store = configureStore({
  reducer: {
    auth: authReducer,
        lesson: lessonReducer,

  },
});

// أنواع جاهزة للاستخدام
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch
// export type AppDispatch = typeof store.dispatch;
