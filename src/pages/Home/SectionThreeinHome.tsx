import { FaClock, FaBook, FaStar } from "react-icons/fa";

// ✅ الكورسات في نفس الملف
const courses = [
  {
    image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg",
    instructor: "Jason Williams",
    category: "Science",
    title: "Data Science and Machine Learning with Python - Hands On!",
    duration: "08 hr 15 mins",
    lectures: 29,
    price: 385,
    oldPrice: 440,
    rating: 4.9,
  },
  {
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    instructor: "Pamela Foster",
    category: "Science",
    title: "Create Amazing Color Schemes for Your UX Design Projects",
    duration: "08 hr 15 mins",
    lectures: 29,
    price: 420,
    rating: 4.9,
  },
  {
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    instructor: "Rose Simmons",
    category: "Science",
    title: "Culture & Leadership: Strategies for a Successful Business",
    duration: "08 hr 15 mins",
    lectures: 29,
    price: 295,
    oldPrice: 340,
    rating: 4.9,
  },

   {
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    instructor: "Rose Simmons",
    category: "Science",
    title: "Culture & Leadership: Strategies for a Successful Business",
    duration: "08 hr 15 mins",
    lectures: 29,
    price: 295,
    oldPrice: 340,
    rating: 4.9,
  },

   {
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    instructor: "Rose Simmons",
    category: "Science",
    title: "Culture & Leadership: Strategies for a Successful Business",
    duration: "08 hr 15 mins",
    lectures: 29,
    price: 295,
    oldPrice: 340,
    rating: 4.9,
  },

   {
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    instructor: "Rose Simmons",
    category: "Science",
    title: "Culture & Leadership: Strategies for a Successful Business",
    duration: "08 hr 15 mins",
    lectures: 29,
    price: 295,
    oldPrice: 340,
    rating: 4.9,
  },
];

export default function CoursesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[150px]">
      {courses.map((course, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
        >
          {/* صورة الكورس */}
          <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />

          <div className="p-4">
            {/* المحاضر + التصنيف */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/40"
                  alt={course.instructor}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800">
                  {course.instructor}
                </span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-lg">
                {course.category}
              </span>
            </div>

            {/* العنوان */}
            <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2">
              {course.title}
            </h3>

            {/* الوقت + المحاضرات */}
            <div className="flex items-center text-gray-500 text-sm gap-4 mb-4">
              <span className="flex items-center gap-1">
                <FaClock className="text-green-600" /> {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <FaBook className="text-green-600" /> {course.lectures} Lectures
              </span>
            </div>

            {/* السعر + التقييم */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold text-lg">
                  ${course.price.toFixed(2)}
                </span>
                {course.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    ${course.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-medium">{course.rating}</span>
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
