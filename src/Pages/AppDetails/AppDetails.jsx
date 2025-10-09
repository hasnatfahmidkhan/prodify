import Container from "../../Components/Container/Container";
import { useParams } from "react-router";
import AppDetailsCard from "../../Components/AppDetailsCard/AppDetailsCard";
import NotFoundApp from "../NotFoundApp/NotFoundApp";
import RatingsChart from "../../Components/RatingsChart/RatingsChart";
import useAppData from "../../Hook/useAppData";
import Loader from "../../Components/Loader/Loader";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useAppData("../appData.json");
  const app = apps.find((a) => String(a.id) === id);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );

  if (!app) return <NotFoundApp />;

  const { ratings, description } = app || {};
  return (
    <div className="bg-base-200 py-8 min-h-[calc(100vh-308px)]">
      <Container>
        <AppDetailsCard app={app} />
        <div className="divider"></div>
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Ratings</h2>
          <div className="h-80 my-5">
            <RatingsChart ratings={ratings} />
          </div>
        </div>
        <div className="divider"></div>
        <div className="py-3 space-y-2">
          <h2 className="text-2xl font-semibold">Description</h2>
          {description
            .split("\n")
            .slice(0, 3)
            .map((part, index) => (
              <p className="text-gray-600 leading-relaxed" key={index}>
                {part.trim()}
                <br />
                <br />
              </p>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
