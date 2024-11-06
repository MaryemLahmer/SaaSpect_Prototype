// PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the Pie Chart
  const data = {
    labels: ['JavaScript', 'HTML', 'PHP'],
    datasets: [
      {
        label: 'Vulnerabilities by Language',
        data: [50, 30, 20], // Values for JavaScript, HTML, PHP
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each slice
        hoverBackgroundColor: ['#FF5B7E', '#4D96D6', '#FFD45F'], // Hover colors
      },
    ],
  };

  return (
    <div className="pie-chart-container mb-16">
      <h3 className="text-xl font-semibold text-white mb-4">Vulnerabilities by Language</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
