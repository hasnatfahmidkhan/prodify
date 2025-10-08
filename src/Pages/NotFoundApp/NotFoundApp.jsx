import appErrorImg from "../../assets/App-Error.png";
import Footer from "../Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router";

const NotFoundApp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
      <div>
        <img className="" src={appErrorImg} alt="404 Page not found" />
      </div>
      <div className="mt-8 mb-4 space-y-3">
        <h2 className="text-3xl md:text-5xl font-bold">OPPS!! APP NOT FOUND</h2>
        <p className="text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
      <button
        onClick={() => navigate("/apps")}
        className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-8"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NotFoundApp;
