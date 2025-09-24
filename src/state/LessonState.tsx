// features/lessonSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../utils/axios";

export const fetchLessons = createAsyncThunk(
  "lesson/fetchLessons",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get(
        "/lesson/67157918f850389e40f0f52a"
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Error loading lessons"
      );
    }
  }
);

interface LessonState {
  lessons: any[];
  loading: boolean;
  error: string | null;
}

const initialState: LessonState = {
  lessons: [],
  loading: false,
  error: null,
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.loading = false;
        state.lessons = action.payload;
      })
      .addCase(fetchLessons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default lessonSlice.reducer;
