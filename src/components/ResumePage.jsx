import React from "react";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      className="resume-page mt-5 w-full text-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-10 px-5 md:px-20">
        <h1 className="text-4xl font-bold text-green-400">Resume</h1>

        {/* Education Section */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-green-300">
            Education
          </h2>
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-5">
            <h3 className="text-xl font-medium">B.Tech in Computer Science</h3>
            <p className="text-sm text-gray-400">
              XYZ University | 2018 - 2022
            </p>
            <p className="text-sm mt-2">
              Specialized in software engineering and web development. GPA:
              8.5/10
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-green-300">
            Experience
          </h2>
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-5">
            <h3 className="text-xl font-medium">Frontend Developer</h3>
            <p className="text-sm text-gray-400">
              ABC Tech Solutions | 2022 - Present
            </p>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>Developed responsive UIs using React and Tailwind CSS</li>
              <li>Collaborated with backend teams on API integration</li>
              <li>Improved app performance by optimizing React rendering</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-green-300">Skills</h2>
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-5">
            <ul className="list-disc list-inside text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>React.js, Next.js</li>
              <li>ASP.NET Core, Entity Framework</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>SQL Server, MongoDB</li>
              <li>Git, GitHub, Azure DevOps</li>
              <li>Framer Motion, Zustand, Redux</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePage;
