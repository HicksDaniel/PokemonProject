import React, { useState } from "react";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { PokeData } from "./PokeData";
import PieChart from "./PieChart";

// Chart.register(CategoryScale);

export default function TypingTable() {
  const [chartData, setChartData] = useState({
    labels: PokeData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: PokeData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <PieChart chartData={chartData} />
    </div>
  );
}
