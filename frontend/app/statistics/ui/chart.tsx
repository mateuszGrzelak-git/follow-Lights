"use client";

import React from "react";
import { Line } from "react-chartjs-2";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Rejestracja elementów Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const ChartFromResults = () => {

    //tmp
    const matches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const points = [10, 15, 12, 20, 18, 22, 25, 23, 28, 30]

    const data = {
        labels: matches,
        datasets: [
            {
                label: "Match history",
                data: points,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // krzywa liniowa
                fill: true,
            },
        ],
    };

    return <Line data={data} />;
}

export default ChartFromResults;