import { motion } from "motion/react";

const Loader = ({ style = "h-screen" }) => {
  return (
    <div className={`flex items-center justify-center ${style}`}>
      <h1 className="text-4xl flex items-center justify-center gap-1 tracking-wide font-extrabold opacity-95 bg-gradient-to-tr from-[#4D1FDE] to-[#9C10D5] bg-clip-text text-transparent">
        L
        <motion.img
          src="/prodify-icon.png"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-8 h-8"
          alt=""
        />
        DING
      </h1>
    </div>
  );
};

export default Loader;
