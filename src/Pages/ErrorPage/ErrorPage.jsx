import React from "react";
import errorImg from "../../assets/error-404.png";
import Footer from "../Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router";
const ErrorPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
        <div>
          <img className="" src={errorImg} alt="404 Page not found" />
        </div>
        <div className="mt-8 mb-4 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold">Opps page not found!</h2>
          <p className="text-[#627382]">
            The page you are looking for is not available
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-8"
        >
          Go Back!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
