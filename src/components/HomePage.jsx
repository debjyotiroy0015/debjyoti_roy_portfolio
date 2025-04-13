import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className="home-page mt-5 w-full px-5 md:px-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section flex flex-col md:flex-row justify-center items-center w-full gap-10 md:gap-20">
        {/* Developer Details */}
        <div className="dev-details w-full md:w-1/2 flex flex-col gap-3 items-start text-center md:text-left">
          <div className="dev-title text-white text-sm md:text-base">
            Software Developer
          </div>
          <div className="dev-introduction text-white text-2xl md:text-3xl">
            Hello, I am
          </div>
          <div className="dev-name text-2xl md:text-3xl text-green-400 font-semibold">
            Debjyoti Roy
          </div>
          <div className="description text-white text-sm md:text-base w-full md:w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            animi, omnis consectetur illo eaque officia reprehenderit quaerat
            repudiandae facere inventore deleniti, neque provident voluptas
            commodi ullam consequatur laboriosam rem eveniet.
          </div>
        </div>

        {/* Profile Photo */}
        <div className="w-48 h-48 md:w-64 md:h-64 bg-green-400 rounded-full"></div>
      </div>

      <div className="home-page-footer mt-10"></div>
    </motion.div>
  );
};

export default HomePage;
