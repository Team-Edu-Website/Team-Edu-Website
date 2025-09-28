import React from 'react';
import { FaBookOpen, FaClipboardList } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            Welcome to Team Edu, your go-to platform for modern online education.
            We are dedicated to providing high-quality courses, tutorials, and resources to help
            learners of all ages achieve their educational goals.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Lessons */}
            <div className="flex items-start gap-3">
              <FaBookOpen className="text-green-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Lessons</h4>
                <p className="text-sm text-gray-500">
                  Access a wide range of courses with engaging video lessons,
                  interactive quizzes, and practical assignments.
                </p>
              </div>
            </div>

            {/* Exams */}
            <div className="flex items-start gap-3">
              <FaClipboardList className="text-green-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Exams</h4>
                <p className="text-sm text-gray-500">
                  Test your knowledge and track your progress with our comprehensive exams and assessments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <img
            src="https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg"
            alt="Student learning"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;