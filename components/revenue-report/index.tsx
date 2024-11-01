// components/revenue-report/index.tsx

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface RevenueData {
    month: string;
    revenue: number;
}

const RevenueReport: React.FC = () => {
    const [revenueData, setRevenueData] = useState<RevenueData[]>([]);

    useEffect(() => {
        fetch('/api/revenue')
            .then((response) => response.json())
            .then((data) => setRevenueData(data))
            .catch((error) => console.error('Error fetching revenue data:', error));
    }, []);

    const chartData = {
        labels: revenueData.map((data) => data.month),
        datasets: [
            {
                label: 'Doanh thu (VND)',
                data: revenueData.map((data) => data.revenue),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Cho phép kiểm soát kích thước tùy chỉnh
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Doanh thu bán SUP theo tháng',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (tickValue: string | number) {
                        if (typeof tickValue === 'number') {
                            return tickValue.toLocaleString() + ' VND';
                        }
                        return tickValue;
                    },
                },
            },
        },
    };

    return (
        <div className="revenue-report" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Revenue Report</h1>
            <div style={{ position: 'relative', height: '400px', width: '100%' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default RevenueReport;
