import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { MdArrowDropDown } from "react-icons/md";
import { loadStoredData } from "../../Utility/localStorage";
import useAppData from "../../Hook/useAppData";
import downloadIcon from "../../assets/icon-downloads.png";
import reviewIcon from "../../assets/icon-review.png";
import ratingIcon from "../../assets/icon-ratings.png";
const Installation = () => {
  const { apps } = useAppData("../appData.json");
  const [sortApp, setSortApp] = useState("none");
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedIds = loadStoredData();
    console.log(apps);
    const filtered = apps.filter((app) => storedIds.includes(app.id));
    setInstalledApps(filtered);
  }, [apps]);

  if (sortApp == "size-asc") {
    installedApps.sort((a, b) => a.size - b.size);
  }
  if (sortApp == "size-dsc") {
    installedApps.sort((a, b) => b.size - a.size);
  }
  return (
    <Container>
      <div className="text-center max-w-2xl w-full mx-auto space-y-3 my-8">
        <h1 className="text-4xl md:text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
        <p className="text-2xl font-semibold">
          {installedApps.length} Apps Found
        </p>
        <div className="relative w-36">
          <select
            value={sortApp}
            onChange={(e) => setSortApp(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md appearance-none bg-base-300 border-none active:border-none"
          >
            <option value="none" disabled>
              Sort by size
            </option>
            <option value="size-asc">Low - High</option>
            <option value="size-dsc">High - Low</option>
          </select>
          <MdArrowDropDown size={25} className="absolute top-[25%] right-2" />
        </div>
      </div>

      <div className="py-5 space-y-5">
        {installedApps.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-center">No Apps Install yet.</p>
            <img className="w-md" src="/empty.gif" alt="" />
          </div>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="w-full bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-starts gap-4 p-4 border border-gray-100"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-14 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h3 className="text-lg font-medium">{app.title}</h3>
                <div className="mt-1 flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#00D390]">
                    <img className="w-4" src={downloadIcon} alt="download" />
                    {app.downloads}
                  </span>
                  <span className="flex items-center gap-1  text-[#FF8811]">
                    <img className="w-4" src={ratingIcon} alt="star" />
                    {app.ratingAvg}
                  </span>
                  <span className="text-gray-400">{app.size} MB</span>
                </div>
              </div>

              <button className="btn bg-[#00D390] text-white rounded-md">
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </Container>
  );
};

export default Installation;
