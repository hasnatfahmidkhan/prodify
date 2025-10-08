import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
const AppCard = ({ app }) => {

    const { ratingAvg, downloads, image, title } = app;
  return (
    <div className="cursor-pointer hover:-translate-y-3 transition duration-300 p-5 bg-base-100 shadow-md border border-gray-100 rounded-xl">
      <figure className="w-64 mx-auto">
        <img
          className="w-full object-center object-cover rounded-xl"
          src={image}
          alt={title}
        />
      </figure>
      <div className="py-5">
        <h2 className="text-center font-semibold text-xl">{title}</h2>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="flex items-center gap-2 px-3.5 py-2 rounded-sm font-bold text-[#00D390] bg-[#F1F5E8]">
          <img className="w-4" src={downloadIcon} alt="download" />
          {downloads}
        </span>
        <span className="flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#FFF0E1] font-bold text-[#FF8811]">
          <img className="w-4" src={ratingIcon} alt="" />
          {ratingAvg}{" "}
        </span>
      </div>
    </div>
  );
};

export default AppCard;
