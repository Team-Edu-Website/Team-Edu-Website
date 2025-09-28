import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSkype } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-green-50 py-12 px-30 overflow-hidden">
      {/* ✅ خلفية دوائر */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-100 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* ✅ Logo & Contact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-700">
            Edu<span className="text-green-500">Le</span>
          </h2>
          <p className="text-gray-700">Caribbean Ct</p>
          <p className="text-green-600">Haymarket, Virginia (VA).</p>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="text-green-600">📧</span> address@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="text-green-600">📞</span> (970) 262-1413
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 text-green-600">
            <FaFacebookF className="cursor-pointer hover:text-green-800" />
            <FaTwitter className="cursor-pointer hover:text-green-800" />
            <FaInstagram className="cursor-pointer hover:text-green-800" />
            <FaSkype className="cursor-pointer hover:text-green-800" />
          </div>
        </div>

        {/* ✅ Category */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Creative Writing</li>
            <li>Film & Video</li>
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
            <li>Business Analytics</li>
            <li>Marketing</li>
          </ul>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Privacy Policy</li>
            <li>Discussion</li>
            <li>Terms & Conditions</li>
            <li>Customer Support</li>
            <li>Course FAQ’s</li>
          </ul>
        </div>

        {/* ✅ Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum has been them an industry printer took a galley make book.
          </p>
          <div className="">
            <input
              type="email"
              placeholder="Email here"
              className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
            />
            <button className="bg-green-600 text-white px-5 py-2 mt-1.5 rounded-r-lg hover:bg-green-700">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
