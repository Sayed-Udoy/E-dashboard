import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = () => {
  const percentage = 80; // 🎯 Change this to update percentage

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage], // ✅ Filled & Empty part
        backgroundColor: ["#A7DED9", "#2B2B36"], // ✅ Light Blue & Dark Background
        borderWidth: 0, // ✅ No border for smooth look
        cutout: "65%", // ✅ Thicker gauge shape
        rotation: -90, // ✅ Start from left side
        circumference: 180, // ✅ Only show top half
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // ❌ No legend for a cleaner look
      tooltip: { enabled: false }, // ❌ Hide tooltip
    },
  };

  return (
    <div className="relative mx-auto w-[250px] h-[174px]"> {/* ✅ Square Shape (Equal width & height) */}
      {/* Gauge Chart */}
      <Doughnut data={data} options={options} />

      {/* Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center text-[25px] font-bold md:mt-10 text-white">
        {percentage}%
      </div>
    </div>
  );
};

export default GaugeChart;
