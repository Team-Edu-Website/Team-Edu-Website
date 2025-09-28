// src/components/ProfileForm.tsx
import React, { useEffect, useState } from "react";
import { UserProfile, getProfile, updateProfile } from "../api/userApi";

export default function ProfileForm() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getProfile();
        if (mounted) setProfile(data.user || data); // API might wrap response in { user }
      } catch (err: any) {
        setMessage(err?.data?.message || err.message || "Failed to load profile");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!profile || !profile._id) return setMessage("Missing user id");
    setSaving(true);
    try {
      const res = await updateProfile(profile._id, profile);
      setMessage(res.message || "Profile updated successfully");
    } catch (err: any) {
      setMessage(err?.data?.message || err.message || "Error updating profile");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="text-center py-6 text-gray-600">Loading profile...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Update Profile</h2>

      <input
        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Full Name"
        value={profile?.fullName || ""}
        onChange={(e) => setProfile({ ...profile!, fullName: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
        value={profile?.email || ""}
        onChange={(e) => setProfile({ ...profile!, email: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Phone Number"
        value={profile?.phoneNumber || ""}
        onChange={(e) => setProfile({ ...profile!, phoneNumber: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Class Level"
        value={profile?.classLevel || ""}
        onChange={(e) => setProfile({ ...profile!, classLevel: e.target.value })}
      />

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </form>
  );
}
