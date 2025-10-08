import { useState } from "react";
import Container from "../../Components/Container/Container";
import useAppData from "../../Hook/useAppData";
import AppCard from "../../Components/AppCard/AppCard";

const Apps = () => {
  const { apps } = useAppData("/appData.json");
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <Container>
      <div className="text-center max-w-2xl w-full mx-auto space-y-3 my-8">
        <h1 className="text-4xl md:text-5xl font-bold">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 py-5">
        <p className="text-2xl font-semibold">
          ({searchedApps.length}) Apps Found
        </p>
        <div className="max-w-72 w-full">
          <label className="input border border-[#632EE3] w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {searchedApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </Container>
  );
};

export default Apps;
