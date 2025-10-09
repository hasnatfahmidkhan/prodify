import { motion } from "motion/react";

const PreLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-300">
      <motion.div
        animate={{
          scale: 1.6,
        }}
        transition={{
          duration: 0.5,
          delay: 2,
          ease: "easeIn",
        }}
        className="relative"
      >
        <motion.img
          initial={{
            scale: 0.5,
            opacity: 0,
            rotate: -90,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="w-20 md:w-30"
          src="/prodify-icon.png"
          alt=""
        />
        <motion.span
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-2xl md:text-4xl absolute -bottom-1 md:-bottom-0.5 left-9 md:left-13.5 font-semibold bg-gradient-to-tr from-[#4D1FDE] to-[#9C10D5] bg-clip-text text-transparent baloobhai-font"
        >
          RODIFY
        </motion.span>
      </motion.div>
    </div>
  );
};

export default PreLoader;
