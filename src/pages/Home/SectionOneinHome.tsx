import React from "react";
import { IoIosSearch } from "react-icons/io";
import CategoriesSlider from "./SectionTwoInHome";

function SectioninHome() {
  return (
    <div className="px-4 sm:px-10 lg:px-20 xl:px-[200px] py-10">
      {/* العنوان + البحث */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* النص */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          All <span className="text-green-600">courses</span> of Edule
        </div>

        {/* مربع البحث */}
        <div className="relative w-full lg:w-[400px]">
          <input
            type="search"
            placeholder="Search your course"
            className="w-full h-[50px] sm:h-[55px] lg:h-[60px] rounded-md border border-gray-400 
              focus:border-green-600 focus:ring-1 focus:ring-green-900 outline-none px-4 pr-12 text-sm sm:text-base"
          />
          {/* أيقونة البحث */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-green-50 p-2">
            <IoIosSearch className="text-xl sm:text-2xl text-green-600" />
          </div>
        </div>
      </div>

      {/* السلايدر */}
      <div className="mt-10">
        <CategoriesSlider />
      </div>
    </div>
  );
}

export default SectioninHome;
