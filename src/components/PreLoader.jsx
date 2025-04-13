// components/SplashScreen.tsx
import { motion } from "framer-motion";

export default function PreLoader() {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden flex items-center justify-center">
      {/* First div animates first */}
      <motion.div
        className="absolute top-0 left-0 w-[25%] bg-black"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
      />

      {/* Second div animates after the first */}
      <motion.div
        className="absolute top-0 left-[25%] w-[25%] bg-black"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
      />
      <motion.div
        className="absolute top-0 left-[50%] w-[25%] bg-black"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.6 }}
      />
      <motion.div
        className="absolute top-0 left-[75%] w-[25%] bg-black"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.9 }}
      />
      <motion.div
        className="absolute  text-white text-5xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 2.2 }}
      >
        <span>DEBJYOTI</span>
        <span className="text-green-400">.</span>ROY
      </motion.div>
    </div>
  );
}
