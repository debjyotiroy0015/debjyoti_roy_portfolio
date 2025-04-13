import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: "/", name: "Home" },
    { path: "/ServicePage", name: "Services" },
    { path: "/WorkPage", name: "Work" },
    { path: "/ResumePage", name: "Resume" },
    { path: "/ContactPage", name: "Contact" },
  ];

  return (
    <motion.nav
      className="bg-black w-full pt-3 pb-3 flex justify-between items-center shadow-md sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="text-white text-2xl font-bold">
        DEBJYOTI<span className="text-green-400">.</span>ROY
      </div>
      <div className="flex space-x-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-white text-lg font-medium group ${
                isActive ? "active" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;
