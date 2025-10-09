import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.img
        src="/prodify-icon.png"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="w-10 h-10"
        alt=""
      />
    </div>
  );
};

export default Loader;
