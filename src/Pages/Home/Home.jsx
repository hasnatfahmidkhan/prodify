import React from "react";
import playStoreImg from "../../assets/playsote.png";
import appStoreImg from "../../assets/appstore.png";
import heroBgImg from "../../assets/hero.png";
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
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          className="btn"
        >
          <img className="max-w-6" src={appStoreImg} alt="app store logo" />
          App store
        </a>
      </div>

      <div className="flex items-center justify-center px-4 md:px-8">
        <img src={heroBgImg} alt="hero section background image" />
      </div>
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white space-y-4 p-10 md:p-14">
        <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-semibold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around xl:max-w-2/3  mx-auto text-center md:py-8 gap-y-4">
          <div className="space-y-1 md:space-y-4">
            <p className="">Total Downloads</p>
            <h3 className="text-2xl md:text-5xl font-extrabold">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-4">
            <p className="">Total Downloads</p>
            <h3 className="text-2xl md:text-5xl font-extrabold">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-4">
            <p className="">Total Downloads</p>
            <h3 className="text-2xl md:text-5xl font-extrabold">29.6M</h3>
            <p>21% more than last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
