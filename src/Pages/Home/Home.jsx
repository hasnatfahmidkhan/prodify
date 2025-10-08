import React from "react";
import playStoreImg from "../../assets/playsote.png";
import appStoreImg from "../../assets/appstore.png";
const Home = () => {
  return (
    <div className="mt-5 md:mt-10">
      <div className="max-w-5xl mx-auto space-y-4 px-4">
        <h1 className="text-center text-4xl md:text-5xl xl:text-7xl font-bold md:leading-14 xl:leading-20">
          We Build <br />
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {" "}
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="text-[#627382] text-center">
          Prodify is where creativity meets productivity — a platform for
          building, sharing, and discovering smart apps that transform the way
          you work. We empower developers to innovate and users to achieve more
          with seamless, efficient, and inspiring digital experiences.{" "}
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 py-8">
        <a href="https://play.google.com/" target="_blank" className="btn">
          <img className="max-w-6" src={playStoreImg} alt="Play Store Logo" />
          Google Play
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" className="btn">
          <img className="max-w-6" src={appStoreImg} alt="app store logo" />
          App store
        </a>
      </div>
    </div>
  );
};

export default Home;
