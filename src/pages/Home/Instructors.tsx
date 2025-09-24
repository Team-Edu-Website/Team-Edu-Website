// components/Instructors.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import img from "../../assets/download (23).jpg"

const instructors = [
  {
    name: "Margarita James",
    degree: "MSC, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Mitchell Colon",
    degree: "BBA, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Sonya Gordon",
    degree: "MBA, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Archie Neal",
    degree: "BBS, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Randal Ramsey",
    degree: "MBBS, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Rochelle Thomas",
    degree: "MSC, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Della Salazar",
    degree: "MBA, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Ricardo Patrick",
    degree: "BBS, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Kurt Stewart",
    degree: "MBA, Instructor",
    rating: 4.9,
    image: img,
  },
  {
    name: "Rodney Terry",
    degree: "BBA, Instructor",
    rating: 4.9,
    image: img,
  },
];

export default function Instructors() {
  return (
    <section className="py-16 bg-white text-center">
      {/* العنوان */}
      <div className="mb-12">
        <p className="text-green-600 font-medium">Team Member’s</p>
        <h2 className="text-3xl font-bold text-gray-800">
          Edule Skilled <span className="text-green-600 underline">Instructor</span>
        </h2>
      </div>

      {/* الشبكة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl mx-auto px-6">
        {instructors.map((inst, index) => (
          <div key={index} className="text-center">
            {/* الصورة */}
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200 overflow-hidden shadow-md">
              <img
                src={inst.image}
                alt={inst.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* التقييم */}
            <div className="flex justify-center items-center mt-3 text-yellow-500 text-sm">
              <FaStar />
              <span className="ml-1 text-gray-700">{inst.rating}</span>
              <span className="ml-1 text-gray-500">(rating)</span>
            </div>

            {/* الاسم */}
            <h3 className="mt-2 font-semibold text-lg text-gray-800">
              {inst.name}
            </h3>

            {/* الدرجة */}
            <p className="text-green-600 text-sm">{inst.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
