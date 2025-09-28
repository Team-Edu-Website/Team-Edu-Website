// src/api/userApi.ts

export interface UserProfile {
  _id?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  classLevel?: string;
  [key: string]: any;
}

// ✅ Use Vite env variable OR fallback to deployed backend
const API_URL =
  import.meta.env.VITE_API_URL || "https://edu-master-delta.vercel.app/api/v1";

const TOKEN_KEY = "token";

// -------------------------
// 🔹 Token Helpers
// -------------------------
export const setToken = (t: string) => localStorage.setItem(TOKEN_KEY, t);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

// -------------------------
// 🔹 Fetch Wrapper
// -------------------------
async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) headers["token"] = token;

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  const text = await res.text();

  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = text;
  }

  if (!res.ok) {
    const err: any = new Error(
      data?.message || res.statusText || "Request failed"
    );
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}

// -------------------------
// 🔹 User APIs
// -------------------------

// Forgot password → send OTP
export const forgotPassword = (email: string) =>
  apiFetch("/users/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });

// Reset password → use OTP + new password
export const resetPassword = (email: string, otp: string, password: string) =>
  apiFetch("/users/reset-password", {
    method: "POST",
    body: JSON.stringify({ email, otp, password }),
  });

// Get logged-in user profile
export const getProfile = () =>
  apiFetch("/users/", { method: "GET" });

// Update profile
export const updateProfile = (userId: string, data: Partial<UserProfile>) =>
  apiFetch(`/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

// Update password (while logged in)
export const updatePassword = (oldPassword: string, newPassword: string) =>
  apiFetch("/users/update-password", {
    method: "PATCH",
    body: JSON.stringify({ oldPassword, newPassword }),
  });

// Delete user account
export const deleteUser = () =>
  apiFetch("/users/", { method: "DELETE" });
