// components/InstructorBanner.tsx
import React from "react";

export default function InstructorBanner() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between bg-green-50 p-20">
        {/* النص */}
        <div>
          <p className="text-sm text-green-700 font-medium mb-2">
            Become A Instructor
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            You can join with Edule as{" "}
            <span className="text-green-600 underline">a instructor?</span>
          </h2>
        </div>

        {/* السهم + الزر */}
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          {/* السهم */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-28 h-12 text-green-600 animate-pulse"
            viewBox="0 0 200 80"
            fill="none"
          >
            <path
              d="M10 60 C80 10, 120 10, 190 30"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M180 20 L195 30 L180 40"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* الزر */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow transition">
            Drop Information
          </button>
        </div>
      </div>
    </section>
  );
}
