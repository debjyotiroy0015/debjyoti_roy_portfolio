import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import Navbar from "./components/Navbar"; // 👈 import your navbar

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 bg-white"
          >
            <PreLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="pl-8 pr-8"
        >
          <Navbar /> {/* 👈 Global Navbar on every page */}
          <Outlet /> {/* Renders the current page */}
        </motion.div>
      )}
    </div>
  );
}

export default App;
