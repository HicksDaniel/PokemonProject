import React, { useState, useEffect, useContext } from "react";
import { RegionContext } from "../../store/RegionContext";
import { Chart } from "primereact/chart";

const MOCK_TYPE_COUNT = [115, 325, 300, 222, 71];
const MOCK_CHART_DATA = {
  labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
  datasets: [
    {
      data: MOCK_TYPE_COUNT,
      backgroundColor: [
        "rgba(255, 159, 64, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgb(255, 159, 64)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderWidth: 1,
    },
  ],
};

const DEFAULT_OPTIONS = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function RegionalSpeciesChart() {
  const { region, regionUrl, regionDescription } = useContext(RegionContext);
  const [chartData, setChartData] = useState(MOCK_CHART_DATA);
  const [chartOptions, setChartOptions] = useState(DEFAULT_OPTIONS);
  const [typeCount, setTypeCount] = useState(MOCK_TYPE_COUNT);

  useEffect(() => {
    const fetchRegion = async () => {
      const res = await fetch(regionUrl);
      const data = await res.json();
      if (!data) return;
      const locations = data?.locations || [];

      const cities = locations.filter((location) =>
        location?.name.includes("city")
      );

      const routes = locations
        .filter((location) => location?.name.includes("route"))
        .map((route) => ({ ...route, name: route.name.replace("kanto-", "") }))
        .sort(
          (a, b) =>
            a?.name.replace(/[^0-9.]+/g, "") - b?.name.replace(/[^0-9.]+/g, "")
        );

      const towns = locations.filter(
        (location) =>
          location?.name.includes("town") ||
          location?.name.includes("cinnabar-island")
      );

      setCities(cities);
      setRoutes(routes);
      setTowns(towns);
    };
    fetchRegion();
  }, [region, regionUrl]);

  const data = {
    ...chartData,
    datasets: chartData.datasets.map((data) => ({
      ...data,
      data: typeCount,
      label: `Pokemon Types in ${region} region.`,
    })),
  };

  return (
    <div>
      <Chart type="bar" data={data} options={chartOptions} />
    </div>
  );
}
