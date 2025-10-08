import useAppData from "../../Hook/useAppData";
import Banner from "../../Components/Banner/Banner";
import AppCard from "../../Components/AppCard/AppCard";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
const Home = () => {
  const { apps } = useAppData("/trendingAppData.json");

  return (
    <>
      <Banner />
      <Container>
        <section className="my-4 md:my-10">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-4xl md:text-5xl font-bold">Trending Apps</h2>
              <svg
                stroke="#632EE3"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <p className="text-[#627382] text-xl">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="text-center">
            <Button text="Show All" route={"/apps"} />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
