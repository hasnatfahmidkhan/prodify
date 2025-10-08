import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import "./appDetailsCard.css";
const AppDetailsCard = ({ app }) => {
  const { ratingAvg, downloads, image, title, companyName, reviews, size } =
    app;
  return (
    <div className="px-4 md:px-20 flex flex-col lg:flex-row gap-8 md:gap-15 xl:gap-30">
      <img
        src={image}
        className="w-sm rounded-lg shadow-md md:shadow-2xl border border-gray-100"
      />
      <div className="flex-1">
        <h1 className="text-xl md:text-3xl font-bold text-[#001931]">
          {title}
        </h1>
        <p className="pt-2 text-[#627382] text-xl">
          Developed by:{" "}
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {companyName}
          </span>
        </p>
        <div className="divider"></div>
        <button className="btn px-5 py-6.5 text-lg font-medium bg-[#00D390] text-white skeleton">
          Install Now ({size}MB)
        </button>

        <div className="grid grid-cols-3 xl:w-2/3">
          <div className="card">
            <img className="w-8" src={downloadIcon} alt="" />
            <span className="text-[#001931]">Downloads</span>
            <span className="review">{downloads}</span>
          </div>
          <div className="card">
            <img className="w-8" src={ratingIcon} alt="" />
            <span className="text-[#001931]">Average Ratings</span>
            <span className="review">{ratingAvg}</span>
          </div>
          <div className="card">
            <img className="w-8" src={reviewsIcon} alt="" />
            <span className="text-[#001931]">Total Reviews</span>
            <span className="review">{reviews}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsCard;
