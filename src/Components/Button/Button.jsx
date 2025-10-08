const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md px-6 py-5"
    >
      {text}
    </button>
  );
};

export default Button;
