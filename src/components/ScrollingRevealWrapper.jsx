import React from "react";
import { motion, useInView } from "framer-motion";

const ScrollingRevealWrapper = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollingRevealWrapper;
