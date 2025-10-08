import Container from "../../Components/Container/Container";
import { useLocation } from "react-router";
import AppDetailsCard from "../../Components/AppDetailsCard/AppDetailsCard";
import NotFoundApp from "../NotFoundApp/NotFoundApp";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AppDetails = () => {
  const { state: app } = useLocation();
  const { ratings } = app || {};

  return (
    <div className="bg-base-200 py-8 min-h-[calc(100vh-308px)]">
      <Container>
        {app === null ? <NotFoundApp /> : <AppDetailsCard app={app} />}
        <div className="divider"></div>
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Ratings</h2>
          <div className="h-80 my-5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratings} layout="vertical" barCategoryGap="20%">
                <XAxis />
                <YAxis dataKey="name" type="category" reversed />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="divider"></div>
        <div className="py-3 space-y-2">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="text-gray-600">{app.description}</p>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
