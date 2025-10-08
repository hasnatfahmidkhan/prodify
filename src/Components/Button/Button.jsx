import { useNavigate } from "react-router";

const Button = ({ text, route }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(route)}
      className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md px-8 py-6"
    >
      {text}
    </button>
  );
};

export default Button;
