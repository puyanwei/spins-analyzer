import { ReactElement } from "react";
import { Pie } from "react-chartjs-2";
import { PrizePoolsProps } from "../../Pages/AnalysisPage";
import { ChartStyle } from "../../shared/chartStyle";

export interface PrizePoolsPropsData {
  data: PrizePoolsProps;
}

const Prizepools = ({ data }: PrizePoolsPropsData): ReactElement => {
  const chartsData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Prizepool Distribution",
        data: Object.values(data),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartStyle>
      <Pie type="pie" data={chartsData} />
    </ChartStyle>
  );
};

export default Prizepools;