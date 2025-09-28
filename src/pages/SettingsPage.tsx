import { useState } from "react";
import { updatePassword, deleteUser, clearToken } from "../api/userApi";

export default function SettingsPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async () => {
    setLoading(true);
    try {
      const res = await updatePassword(oldPassword, newPassword);
      setMessage(res.message || "Password updated successfully");
      setOldPassword("");
      setNewPassword("");
    } catch (err: any) {
      setMessage(err.message || "Error updating password");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete your account? This cannot be undone.")) return;
    try {
      const res = await deleteUser();
      setMessage(res.message || "Account deleted");
      clearToken();
      // Optionally redirect to login/home
    } catch (err: any) {
      setMessage(err.message || "Error deleting account");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow space-y-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      {/* Update Password Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Update Password</h3>
        <input
          type="password"
          placeholder="Old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <button
          onClick={handleUpdatePassword}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>

      {/* Danger Zone */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold text-red-600 mb-3">Danger Zone</h3>
        <button
          onClick={handleDelete}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Delete Account
        </button>
      </div>

      {/* Feedback message */}
      {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
    </div>
  );
}
