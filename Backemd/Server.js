import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

let otpStore = {}; // temporary store (use DB in production)

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // app password
  },
});

// Forgot Password (send OTP)
app.post("/api/user/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email required" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    otpStore[email] = { otp, expires: Date.now() + 5 * 60 * 1000 }; // 5 min expiry

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    res.json({ message: "OTP sent to your email" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reset Password (verify OTP)
app.post("/api/user/reset-password", (req, res) => {
  const { email, otp, password } = req.body;

  if (!otpStore[email]) return res.status(400).json({ error: "No OTP found" });
  if (otpStore[email].expires < Date.now())
    return res.status(400).json({ error: "OTP expired" });
  if (otpStore[email].otp !== otp)
    return res.status(400).json({ error: "Invalid OTP" });

  // TODO: update password in database
  delete otpStore[email];

  res.json({ message: "Password reset successful" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));