// src/components/UpdatePasswordForm.tsx
import React, { useState } from "react";
import { updatePassword } from "../api/userApi";

export default function UpdatePasswordForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await updatePassword(oldPassword, newPassword);
      setMessage(res.message || "Password updated successfully");
      setOldPassword("");
      setNewPassword("");
    } catch (err: any) {
      setMessage(err?.data?.message || err.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Change Password
      </h2>

      <input
        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        required
      />

      <input
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <button
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded transition"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Password"}
      </button>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </form>
  );
}
