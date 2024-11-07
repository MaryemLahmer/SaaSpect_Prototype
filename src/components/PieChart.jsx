// PieChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the Pie Chart
  const data = {
    labels: ["JavaScript", "MySQL", "PHP"],
    datasets: [
      {
        label: "Vulnerabilities by Language",
        data: [50, 30, 20], // Values for JavaScript, HTML, PHP
        backgroundColor: ["#257180", "#000B58", "#AF1740"], // Colors for each slice
        hoverBackgroundColor: ["#257180", "#000B58", "#AF1740"], // Hover colors
      },
    ],
  };

  return (
    <div className="pie-chart-container mb-[5rem]">
      <h3
        className="text-2xl font-semibold  mb-[2rem] text-center"
        style={{ color: "#c62e2e" }}
      >
        Vulnerabilities in Code
      </h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
