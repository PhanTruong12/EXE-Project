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

const data = {
  labels: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Technology', 'Administration'],
  datasets: [
    {
      label: 'Allocated Budget',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'blue',
      fill: true,
    },
    {
      label: 'Actual Spending',
      data: [28, 48, 40, 19, 96, 27],
      borderColor: 'green',
      fill: true,
    },
  ],
};

const BudgetReport = () => (
<div className="admin-chart-container">
  <Radar data={data} /></div >
);
export default BudgetReport;
