import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { loadStoredData, removeAppData } from "../../Utility/localStorage";
import useAppData from "../../Hook/useAppData";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import swal from "sweetalert";

const Installation = () => {
  const { apps } = useAppData("../appData.json");
  const [sortApp, setSortApp] = useState("none");
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedIds = loadStoredData();

    const filtered = apps.filter((app) => storedIds.includes(app.id));
    setInstalledApps(filtered);
  }, [apps]);

  if (sortApp == "downloads-asc") {
    installedApps.sort(
      (a, b) =>
        Number(a.downloads.replace(/[a-zA-Z]/g, "")) -
        Number(b.downloads.replace(/[a-zA-Z]/g, ""))
    );
  }
  if (sortApp == "downloads-dsc") {
    installedApps.sort(
      (a, b) =>
        Number(b.downloads.replace(/[a-zA-Z]/g, "")) -
        Number(a.downloads.replace(/[a-zA-Z]/g, ""))
    );
  }

  const handleUninstall = (id) => {
    swal("Are you sure to uninstall it?", {
      buttons: ["no", "yes!"],
    }).then((willDelete) => {
      if (willDelete) {
        removeAppData(id);

        // ui update
        setInstalledApps((prev) => prev.filter((app) => app.id !== id));
        swal("Unistall Succesfully!", "", "success");
      }
    });
  };
  return (
    <div className="bg-[#f5f5f5] min-h-[calc(100vh-308px)]">
      <Container>
        <div className="text-center max-w-2xl w-full mx-auto space-y-3 my-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Installed Apps
          </h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us{" "}
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
          <p className="text-2xl font-semibold">
            {installedApps.length} Apps Found
          </p>
          <div className="">
            <select
              value={sortApp}
              onChange={(e) => setSortApp(e.target.value)}
              className="select bg-white"
            >
              <option value="none" disabled>
                Sort by downloads
              </option>
              <option value="downloads-asc">Low - High</option>
              <option value="downloads-dsc">High - Low</option>
            </select>
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

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="btn bg-[#00D390] text-white rounded-md"
                >
                  Uninstall
                </button>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Installation;
