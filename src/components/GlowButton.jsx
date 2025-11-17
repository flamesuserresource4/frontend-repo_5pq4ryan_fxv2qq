import React from "react";
import { motion } from "framer-motion";

const GlowButton = ({ children, onClick, variant = "primary", className = "", as = "button" }) => {
  const Component = as;
  const colors = {
    primary: "from-[#00E0FF] to-[#7C3AED]",
    pink: "from-[#FF006A] to-[#7C3AED]",
    cyan: "from-[#00E0FF] to-[#FF006A]",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex rounded-xl p-[2px] transition-shadow duration-300 ${className}`}
      style={{
        boxShadow: "0 0 20px rgba(0,224,255,0.35), 0 0 40px rgba(124,58,237,0.25)",
      }}
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors[variant]} opacity-80 blur`}></div>
      <Component
        onClick={onClick}
        className="relative z-10 rounded-[0.9rem] bg-black/80 text-white px-6 py-3 font-semibold tracking-wide backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default GlowButton;
