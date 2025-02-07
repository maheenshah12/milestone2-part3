"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Top Decorative Line */}
      <div className="w-24 h-1 bg-gray-600 rounded-full mb-6"></div>

      {/* Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Form Container */}
      <motion.div
        className="bg-white/25 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-lg w-full border border-gray-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <form action="#" method="POST" className="flex flex-col space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-900 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
