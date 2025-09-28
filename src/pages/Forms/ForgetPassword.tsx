// src/pages/Auth/ForgotPassword.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import { forgotPassword } from "../../state/AuthSlice";
import { useNavigate } from "react-router-dom";  // ✅

const forgotSchema = z.object({
  email: z.string().email("الإيميل غير صحيح"),
});

type ForgotFormData = z.infer<typeof forgotSchema>;

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate(); // ✅

  const [message, setMessage] = React.useState<string | null>(null);

  const onSubmit = async (data: ForgotFormData) => {
    setMessage(null);
    try {
      const result = await dispatch(forgotPassword({ email: data.email })).unwrap();

      // ✅ بعد النجاح، يروح مباشرةً لصفحة إعادة التعيين
      navigate("/reset-password"); 

      // أو لو السيرفر بيرجع Token في الرابط:
      // navigate(`/reset-password?token=${result.token}`);ؤخىثسق
        console.log(result)
    } catch (err: any) {
      console.error("خطأ أثناء إعادة تعيين كلمة المرور:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-5 border"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">نسيت كلمة المرور</h2>
        
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

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold text-lg"
        >
          {loading ? "جاري الإرسال..." : "إرسال رابط إعادة التعيين"}
        </button>

        {/* Messages */}
        {message && <p className="text-green-600 text-center mt-4">{message}</p>}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}
