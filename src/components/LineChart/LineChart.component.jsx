import React, { useEffect } from "react";
import Chart from "chart.js";
import "./LineChart.styles.css";
const LineChart = ({ data }) => {
  console.log(data);

  const label = data.map((date) => new Date(date.Date).toLocaleDateString());
  console.log(label);
  const confirmed = data.map((confirmed) => confirmed.Confirmed);
  console.log(confirmed);
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "# of Confirmed in last ten days",
            data: confirmed,

          },
        ],
      },
    });
  });
  return (
    <div className="confirmed">
      <canvas id="myChart" width="250" height="250" />
    </div>
  );
};

export default LineChart;
