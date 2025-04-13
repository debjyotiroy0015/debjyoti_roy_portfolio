import React from "react";
import { motion } from "framer-motion";

const WorkPage = () => {
  return (
    <motion.div
      className="work-page mt-5 w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-10 text-white">
        <h1 className="text-4xl font-bold text-green-400">My Work</h1>

        <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20">
          {/* Project 1 */}
          <div className="project-card bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-green-300 mb-2">
              Portfolio Website
            </h2>
            <p className="text-sm">
              A clean and responsive personal portfolio built with React and
              Tailwind CSS to showcase skills and projects.
            </p>
          </div>

          {/* Project 2 */}
          <div className="project-card bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-green-300 mb-2">
              Seat Booking App
            </h2>
            <p className="text-sm">
              A microservices-based application using ASP.NET Core and React for
              office space management.
            </p>
          </div>

          {/* Project 3 */}
          <div className="project-card bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-green-300 mb-2">
              E-commerce Backend
            </h2>
            <p className="text-sm">
              RESTful API backend for an e-commerce site using .NET Core, EF
              Core, and JWT authentication.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
