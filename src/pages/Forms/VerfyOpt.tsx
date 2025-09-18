// src/pages/Auth/VerifyOtp.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axios";

const otpSchema = z
  .object({
    email: z.string().email("الإيميل غير صحيح"),
    otp: z.string().min(4, "أدخل الكود المرسل إلى بريدك"),
    password: z
      .string()
      .min(8, "كلمة المرور لازم تكون 8 أحرف على الأقل")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "كلمة المرور لازم تحتوي على: حرف كبير + حرف صغير + رقم + رمز خاص"
      ),
    confirmPassword: z.string().min(8, "تأكيد كلمة المرور لازم يكون 8 أحرف على الأقل"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور وتأكيدها غير متطابقين",
    path: ["confirmPassword"],
  });

type OtpFormData = z.infer<typeof otpSchema>;

export default function VerifyOtp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
  });

  const [message, setMessage] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (data: OtpFormData) => {
    setMessage(null);
    setError(null);

    try {
      const res = await axiosClient.post("/user/reset-password", {
        email: data.email,
        otp: data.otp,
        newPassword: data.password,
        cpassword: data.confirmPassword,
      });

      setMessage(res.data.message || "تم تغيير كلمة المرور بنجاح");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err: any) {
      console.error("خطأ أثناء التحقق:", err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("فشل تغيير كلمة المرور، حاول مرة أخرى");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-5 border"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          تأكيد الكود وتعيين كلمة مرور
        </h2>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="ادخل بريدك الإلكتروني"
            {...register("email")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* OTP */}
        <div>
          <input
            type="text"
            placeholder="أدخل الكود (OTP)"
            {...register("otp")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.otp && (
            <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="كلمة المرور الجديدة"
            {...register("password")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            {...register("confirmPassword")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-medium transition ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {isSubmitting ? "جاري التحديث..." : "تأكيد وتغيير كلمة المرور"}
        </button>

        {/* Messages */}
        {message && <p className="text-green-600 text-center mt-4">{message}</p>}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}
