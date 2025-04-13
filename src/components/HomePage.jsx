import React from "react";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      className="home-page mt-5 w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section flex justify-center items-center w-full">
        <div className="dev-details w-[50%] flex flex-col gap-3">
          <div className="dev-title text-white text-sm">Software Developer</div>
          <div className="dev-introduction text-white text-3xl">
            Hello , I am{" "}
          </div>
          <div className="dev-name text-3xl text-green-400">Debjyoti Roy</div>
          <dev className="descriotion text-white text-sm w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            animi, omnis consectetur illo eaque officia reprehenderit quaerat
            repudiandae facere inventore deleniti, neque provident voluptas
            commodi ullam consequatur laboriosam rem eveniet.
          </dev>
        </div>
        <div className="w-64 h-64 bg-green-400 rounded-full"></div>
      </div>
      <div className="home-page-footer"></div>
    </motion.div>
  );
};

export default HomePage;
