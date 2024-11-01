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
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 40, 28, 50, 40, 60, 70],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 2,
      tension: 0.4, // Làm cho đường biểu đồ mềm mại hơn
    },
    {
      label: 'Revenue',
      data: [40, 50, 38, 60, 50, 70, 80],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: 'Customers',
      data: [20, 30, 18, 40, 30, 50, 60],
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
