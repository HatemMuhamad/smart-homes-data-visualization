import React from "react";
import { Line } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";
import { Reading } from '../common/Types';
import Chart from "chart.js";

interface Props {
  chartData: Reading[];
}

export default function LChart({chartData} : Props) {

  let dates: any = []
  chartData.forEach((reading) => {
    dates.push(reading.day);
  })
  let powerConsumptions: any = []
  chartData.forEach((reading) => {
    powerConsumptions.push(reading.Wattage_Daily_Sum);
  })

  const formatData = (): Chart.ChartData => ({
    labels: dates,
    datasets: powerConsumptions

  });

  formatData()
  //return <Line data={chartData} />;
}
