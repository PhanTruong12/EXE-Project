import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Đăng ký các thành phần cho biểu đồ radar
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Dữ liệu được thêm trực tiếp vào file
const data = {
  labels: [
    'Bụi Chill', 
    'Go N Chill', 
    'Summer SUP', 
    'Huy SUP', 
    'Camping SUP Đà Nẵng', 
    'Bơ SUP', 
    'Thể thao biển Đà Nẵng', 
    'Tùng Lê SUP', 
    'King SUP', 
    'SUP Đà Nẵng', 
    'Hani Glamping'
  ],
  datasets: [
    {
      label: 'Revenue Month 1',
      data: [2000000, 2400000, 5600000, 5000000, 3000000, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    },
    {
      label: 'Revenue Month 2',
      data: [4000000, 4000000, 7000000, 2400000, 3000000, 6000000, 2000000, 3600000, 0, 0, 0],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
    {
      label: 'Revenue Month 3',
      data: [4400000, 4400000, 5600000, 6000000, 3600000, 7400000, 4000000, 3000000, 2400000, 1600000, 1600000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      fill: true,
    },
  ],
};

// Các tùy chọn cho biểu đồ
const options = {
  scales: {
    r: {
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 8000000, // Tùy chỉnh tối đa theo dữ liệu của bạn
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
    },
    tooltip: {
      enabled: true,
    },
  },
};

// Component hiển thị biểu đồ Radar
const BudgetReport = () => (
  <div className="admin-chart-container">
    <Radar data={data} options={options} />
  </div>
);

export default BudgetReport;
