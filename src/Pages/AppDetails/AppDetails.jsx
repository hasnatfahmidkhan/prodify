import Container from "../../Components/Container/Container";
import { useLocation } from "react-router";
import AppDetailsCard from "../../Components/AppDetailsCard/AppDetailsCard";

const AppDetails = () => {
  const { state: app } = useLocation();

  return (
    <>
      <div className="bg-base-200 py-9">
        <AppDetailsCard app={app} />
      </div>
    </>
  );
};

export default AppDetails;
