import React from "react";
import img from "../../assets/register-login.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../state/store";
import { login } from "../../state/AuthSlice";

// ✅ Zod Schema مطابق للي السيرفر طالب
const loginSchema = z.object({
  email: z.string().email("الإيميل غير صحيح"),
  password: z
    .string()
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "كلمة المرور لازم تحتوي على: حرف كبير + حرف صغير + رقم + رمز خاص + 8 أحرف على الأقل"
    ),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await dispatch(login(data)).unwrap();
      console.log("✅ تسجيل الدخول ناجح:", result);
      navigate("/Home");
    } catch (error: any) {
      console.error("خطأ أثناء تسجيل الدخول:", error);

      const message =
        error?.message || error?.response?.data?.message || "فشل تسجيل الدخول";

      if (message.includes("not verified")) {
        alert("⚠️ حسابك غير مُفعل. من فضلك تحقق من بريدك الإلكتروني لتفعيل الحساب.");
      } else if (message.includes("not found")) {
        alert("❌ المستخدم غير موجود. من فضلك أنشئ حساب جديد.");
      } else if (message.includes("incorrect")) {
        alert("❌ كلمة المرور غير صحيحة.");
      } else {
        alert(message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen to-green-100 p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* ✅ صورة */}
        <div className="relative flex items-center justify-center m-5 bg-green-50 p-6">
          <img
            src={img}
            alt="student"
            className="relative w-80 z-10 object-contain"
          />
          <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-56 h-56 top-6 bg-green-600 rounded-full z-0 shadow-md"></div>
        </div>

        {/* ✅ فورم تسجيل الدخول */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-10"
        >
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
            تسجيل الدخول
          </h2>

          {/* Email */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="example@email.com"
              {...register("email")}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="كلمة المرور"
              {...register("password")}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold text-lg"
          >
            دخول
          </button>

          <Link to="/register" className="text-center text-green-600 mt-2">
            انشاء حساب جديد
          </Link>

          
          <Link to="/forgetpassword" className="text-center text-green-600 mt-2">
            forget password
          </Link>
        </form>
      </div>
    </div>
  );
}
