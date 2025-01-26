import { motion } from "motion/react";
import React from "react";

const HoverAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: [null, 1.1],
        transition: {
          duration: 0.5,
          times: [0, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
        {children}
    </motion.div>
  );
};

export default HoverAnimation;
