import React from "react";
import { motion } from "framer-motion";

const ServicePage = () => {
  return (
    <motion.div
      className="service-page mt-5 w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-section flex flex-col items-center text-white gap-10">
        <h1 className="text-4xl font-bold text-green-400">My Services</h1>

        <div className="services-container grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-20">
          {/* Service Card 1 */}
          <div className="service-card bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold mb-2 text-green-300">
              Web Development
            </h2>
            <p className="text-sm">
              Building responsive, fast, and modern websites using React.js,
              Tailwind CSS, and more.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold mb-2 text-green-300">
              Backend API
            </h2>
            <p className="text-sm">
              Creating scalable and secure APIs using ASP.NET Core and Node.js
              with clean architecture principles.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold mb-2 text-green-300">
              UI/UX Design
            </h2>
            <p className="text-sm">
              Designing intuitive user interfaces with great user experience
              using modern tools.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePage;
