import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/images.png"
import img2 from "../../assets/girl2.png"
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <div className="bg-green-50 min-h-screen relative">
      {/* ✅ Navbar */}
      <header className="flex justify-between items-center gap-5 px-5 py-3 mt-2 rounded-[10px]  mx-[150px]  border bg-green-50">
        <div className="flex items-center space-x-2   ">
          <span className="text-green-600 text-2xl font-bold">
            <img src={img1} className="w-12" alt="" />
          </span>
          <h1 className="text-2xl font-bold">
            Edu<span className="text-green-600">Le</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="text-green-600 border-b-2 border-green-600">
            Home
          </a>
          <a href="#">All Course</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <Link to="/login" className="px-4 py-2">Sign In</Link>
          <Link to="/register" className="px-4 py-2 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
            Sign Up
          </Link>
        </div>
      </header>

      {/* ✅ Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-[150px] py-20 gap-10">
        {/* Left Side */}
        <div>
          <p className="text-green-600 font-medium mb-3">
            Start your favourite course
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug text-gray-800">
            Now learning from <br />
            anywhere, and <br />
            build your{" "}
            <span className="text-green-600">bright career.</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-6">
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Start A Course
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">
          {/* صورة البنت */}
          <img
            src={img2} // حط الصورة عندك في public
            alt="student"
            className="relative z-10 w-[500px] h-[500px] mb-[-90px]"
          />

          {/* ✅ ديكور: عدد الكورسات */}
          <div className="absolute top-10 left-0 bg-green-600 text-white p-6 rounded-full shadow-lg">
            <p className="text-2xl font-bold">1,235</p>
            <p className="text-sm">courses</p>
          </div>

          {/* ✅ ديكور: التقييم */}
          <div className="absolute top-[-30px] right-0 bg-white px-4 py-2 rounded-full w-[70px] h-[70px] flex-col  shadow-lg flex items-center space-x-2">
           <div className="flex flex-row items-center">
            <span className="font-semibold">4.8</span>
                         <FaStar className="text-yellow-400" />

           </div>
            <span className="text-gray-500 text-sm">(86K)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
