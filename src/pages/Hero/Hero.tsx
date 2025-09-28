import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/images.png";
import img2 from "../../assets/girl2.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ✅ لما ينزل 50px تتغير الخلفية
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-green-50 min-h-screen relative">
      {/* ✅ Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-gray-200"
            : "bg-green-50 border"
        }`}
      >
        <div className="flex justify-between items-center gap-5 px-5 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-2xl font-bold">
              <img src={img1} className="w-12" alt="logo" />
            </span>
            <h1 className="text-2xl font-bold">
              Edu<span className="text-green-600">Le</span>
            </h1>
          </div>

          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link
              to="/Home"
              className="text-green-600 border-b-2 border-green-600"
            >
              Home
            </Link>
            <Link to="/COURSE">All Course</Link>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
          <Link to="/auth">Auth</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          </nav>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm md:text-base text-gray-700"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm md:text-base border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* ✅ Hero Content */}
      <div className="pt-24 grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20 gap-10">
        {/* Left Side */}
        <div>
          <p className="text-green-600 font-medium mb-3 text-sm md:text-base">
            Start your favourite course
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug text-gray-800">
            Now learning from <br />
            anywhere, and <br />
            build your{" "}
            <span className="text-green-600">bright career.</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-6 text-sm md:text-base">
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition w-full md:w-auto">
            Start A Course
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">
          <img
            src={img2}
            alt="student"
            className="relative z-10 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain"
          />

          {/* ✅ ديكور: عدد الكورسات */}
          <div className="absolute top-6 left-2 sm:left-6 bg-green-600 text-white p-4 sm:p-6 rounded-full shadow-lg">
            <p className="text-lg sm:text-2xl font-bold">1,235</p>
            <p className="text-xs sm:text-sm">courses</p>
          </div>

          {/* ✅ ديكور: التقييم */}
          <div className="absolute -top-6 right-2 sm:right-6 bg-white px-3 py-2 rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex-col shadow-lg flex items-center">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm sm:text-base">4.8</span>
              <FaStar className="text-yellow-400 text-sm sm:text-base" />
            </div>
            <span className="text-gray-500 text-[10px] sm:text-sm">(86K)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
