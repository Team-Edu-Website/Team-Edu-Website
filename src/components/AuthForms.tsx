import { useState } from "react";
import { forgotPassword, resetPassword } from "../api/userApi";

export default function AuthForms() {
  const [step, setStep] = useState<"forgot" | "reset">("forgot");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleForgot = async () => {
    try {
      const res = await forgotPassword(email);
      setMessage(res.message || "OTP sent to your email");
      setStep("reset");
    } catch (err: any) {
      setMessage(err.message || "Failed to send OTP");
    }
  };

  const handleReset = async () => {
    try {
      const res = await resetPassword(email, otp, password);
      setMessage(res.message || "Password reset successful");
    } catch (err: any) {
      setMessage(err.message || "Failed to reset password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Password Recovery
        </h2>

        {step === "forgot" && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleForgot}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Send OTP
            </button>
          </div>
        )}

        {step === "reset" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleReset}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Reset Password
            </button>
          </div>
        )}

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.toLowerCase().includes("fail")
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
