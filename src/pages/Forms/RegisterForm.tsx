import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../state/store";
import { signUp } from "../../state/AuthSlice";
import { useNavigate } from "react-router-dom";


// ✅ Validation Schema
const schema = z
  .object({
    fullName: z.string().min(3, "الاسم لازم يكون على الأقل 3 حروف"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    password: z.string().min(6, "كلمة المرور لازم تكون 6 حروف على الأقل"),
    cpassword: z.string().min(6, "تأكيد كلمة المرور لازم يكون 6 حروف"),
    phoneNumber: z
      .string()
      .regex(/^01[0-9]{9}$/, "رقم الهاتف غير صحيح (مثال: 01012345678)"),
    classLevel: z.string().min(1, "المرحلة الدراسية مطلوبة"),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "كلمة المرور وتأكيدها غير متطابقين",
    path: ["cpassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
    const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

const onSubmit = async (data: FormData) => {
  try {
    await dispatch(signUp(data)).unwrap();
    // ✅ لو التسجيل نجح
    navigate("/login"); // أو "/dashboard" حسب ما انت عايز
  } catch (error: any) {
    console.error("خطأ أثناء التسجيل:", error);
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-5 border"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          إنشاء حساب
        </h2>

        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="الاسم الكامل"
            {...register("fullName")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            {...register("email")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="text"
            placeholder="رقم الهاتف"
            {...register("phoneNumber")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Class Level */}
        <div>
          <select
            {...register("classLevel")}
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">اختر المرحلة الدراسية</option>
            <option value="Grade 1 Secondary">الصف الأول الثانوي</option>
            <option value="Grade 2 Secondary">الصف الثاني الثانوي</option>
            <option value="Grade 3 Secondary">الصف الثالث الثانوي</option>
          </select>
          {errors.classLevel && (
            <p className="text-red-500 text-sm mt-1">{errors.classLevel.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="كلمة المرور"
            autoComplete="new-password"
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
            autoComplete="new-password"
            {...register("cpassword")}
            
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.cpassword && (
            <p className="text-red-500 text-sm mt-1">{errors.cpassword.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition"
        >
          تسجيل
        </button>
      </form>
    </div>
  );
}
