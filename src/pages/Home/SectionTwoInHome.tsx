import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  "UI/UX Design",
  "Development",
  "Data Science",
  "Business",
  "Financial",
  "Marketing",
  "Photography",
  "AI & ML",
];

export default function CategoriesSlider() {
  const [active, setActive] = useState("UI/UX Design");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-green-50 p-4 sm:p-6 rounded-xl flex items-center gap-4">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full border border-gray-300 hover:bg-green-100"
      >
        <FaChevronLeft />
      </button>

      {/* Categories */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 flex-nowrap overflow-x-auto scrollbar-hide scroll-smooth w-full"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg border whitespace-nowrap transition ${
              active === cat
                ? "border-green-600 text-green-600 bg-white shadow-md"
                : "border-gray-300 text-gray-700 bg-white hover:border-green-500 hover:text-green-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full border border-gray-300 hover:bg-green-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
