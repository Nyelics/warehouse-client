import {Doughnut} from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, PointElement);
import PropTypes from "prop-types"; // Import PropTypes

const DoughnutChartComponent = ({doughnutData}) => {
  return <Doughnut data={doughnutData} style={{width: "100%"}} />;
};

DoughnutChartComponent.propTypes = {
  doughnutData: PropTypes.func.isRequired,
};

export default DoughnutChartComponent;
