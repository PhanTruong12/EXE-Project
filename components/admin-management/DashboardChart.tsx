import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ['Bụi Chill', 'Go N Chill', 'Summer SUP', 'Huy SUP', 'Camping SUP Đà Nẵng', 'Bơ SUP', 'Thể thao biển Đà Nẵng', 'Tùng Lê SUP', 'King SUP', 'SUP Đà Nẵng', 'Hani Glamping'],
  datasets: [
    {
      label: 'Revenue Month 1',
      data: [2000000, 2400000, 5600000, 5000000, 3000000, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: 'Revenue Month 2',
      data: [4000000, 4000000, 7000000, 2400000, 3000000, 6000000, 2000000, 3600000, 0, 0, 0],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: 'Revenue Month 3',
      data: [4400000, 4400000, 5600000, 6000000, 3600000, 7400000, 4000000, 3000000, 2400000, 1600000, 1600000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "top" as const,  // Sử dụng const assertion để tránh lỗi
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',
      },
      beginAtZero: true,
    },
  },
};

const DashboardChart = () => (
  <div className="admin-chart-container">
    <Line data={data} options={options} />
  </div>
);

export default DashboardChart;
