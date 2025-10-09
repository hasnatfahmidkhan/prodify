import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
import { motion } from "motion/react";

const RootLayout = () => {
  const [loading, setLoading] = useState(false);
  const [preLoad, setPreLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setPreLoad(false);
    }, 2600);
  }, []);

  // every navigation show loader at the outlet
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [location.pathname]);
  if (preLoad) {
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
            className="w-30"
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
            className="text-4xl absolute -bottom-0.5 left-13.5 font-semibold bg-gradient-to-tr from-[#4D1FDE] to-[#9C10D5] bg-clip-text text-transparent baloobhai-font"
          >
            RODIFY
          </motion.span>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {loading ? (
          <Loader />
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Outlet />
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
