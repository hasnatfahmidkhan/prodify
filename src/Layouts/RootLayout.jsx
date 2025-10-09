import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
import { motion } from "motion/react";
import PreLoader from "../Components/PreLoader/PreLoader";

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

    // scroll to top whenever route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [location.pathname]);

  if (preLoad) {
    return <PreLoader />;
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
