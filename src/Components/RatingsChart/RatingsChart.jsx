import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const RatingsChart = ({ ratings }) => {
  return (
    <div className="h-80 my-5">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ratings} layout="vertical" barCategoryGap="30%">
          <XAxis />
          <YAxis dataKey="name" type="category" reversed />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
