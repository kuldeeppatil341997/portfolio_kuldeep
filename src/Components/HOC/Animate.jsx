import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const Animate = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1.2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
