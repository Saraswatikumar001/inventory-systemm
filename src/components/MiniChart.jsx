import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
  datasets: [{
    label: "Sales",
    data: [320, 420, 350, 480, 520, 610, 700],
    fill: true,
    tension: 0.4,
    backgroundColor: "rgba(139,92,246,0.12)",
    borderColor: "rgb(99,102,241)",
    pointRadius: 0
  }]
};

export default function MiniChart(){
  return <Line data={data} options={{ plugins: { legend: { display: false }}, scales:{y:{display:false}, x:{display:false}}}} />;
}
