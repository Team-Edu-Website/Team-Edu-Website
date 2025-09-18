// features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosClient from "../utils/axios";

// ✅ أنواع
interface User {
  id?: string;
  fullName?: string;
  email: string;
  phoneNumber?: string;
  classLevel?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}

interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  cpassword: string;
  phoneNumber: string;
  classLevel: string;
}

interface LoginData {
  email: string;
  password: string;
}

// ✅ الحالة الابتدائية
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  message: null,
};

// ✅ SignUp
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data: SignUpData, { rejectWithValue }) => {
    try {
      const res = await axiosClient.post("/auth/signup", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Sign up failed");
    }
  }
);

// ✅ Login
export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const res = await axiosClient.post("/auth/login", data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

// ✅ Forgot Password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (data: { email: string }, { rejectWithValue }) => {
    try {
      const res = await axiosClient.post("/user/forgot-password", data);
      return res.data; // { message, success }
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "فشل إرسال رابط إعادة التعيين");
    }
  }
);

// ✅ Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // SignUp
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message || "تم إرسال رابط إعادة التعيين";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
