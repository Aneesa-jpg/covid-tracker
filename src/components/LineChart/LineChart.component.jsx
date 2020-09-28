import React, { useEffect } from "react";
import Chart from "chart.js";
import "./LineChart.styles.css";
const LineChart = ({ label, data, color, desc, id }) => {
  useEffect(() => {
    const ctx = document.getElementById(`${id}`);
    new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: `# of ${desc} in last ten days`,
            data: data,
            backgroundColor: color,
          },
        ],
      },
    });
  });
  return (
    <div className="confirmed">
      <canvas id={id} />
    </div>
  );
};

export default LineChart;
