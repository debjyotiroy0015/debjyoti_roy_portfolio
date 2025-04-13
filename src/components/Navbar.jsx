import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons for clean look

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/ServicePage", name: "Services" },
    { path: "/WorkPage", name: "Work" },
    { path: "/ResumePage", name: "Resume" },
    { path: "/ContactPage", name: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className="bg-black w-full pt-3 pb-3 px-5 flex justify-between items-center shadow-md sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="text-white text-2xl font-bold">
        DEBJYOTI<span className="text-green-400">.</span>ROY
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6">
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

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-[100%] left-0 w-full bg-black flex flex-col items-center gap-4 py-5 md:hidden"
          >
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-white text-lg font-medium ${
                    isActive ? "text-green-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
