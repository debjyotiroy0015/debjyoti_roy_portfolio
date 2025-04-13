import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="contact-page mt-5 w-full text-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-10 px-5 md:px-20">
        <h1 className="text-4xl font-bold text-green-400">Contact Me</h1>

        <form className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1 text-green-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1 text-green-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-1 text-green-300">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 w-fit self-end"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
