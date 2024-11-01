// pages/revenue-analytics.tsx

import React, { useState } from 'react';
import Sidebar from '../components/sup-management/Sidebar';
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

const RevenueAnalytics: React.FC = () => {
    const [dailyRevenue] = useState<number>(8854);
    const [totalRevenue] = useState<number>(458851);
    const [customers] = useState<number>(1752);
    const [chartData] = useState<any>({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales $',
                data: [10000, 15000, 12000, 18000, 25000, 22000, 17000],
                backgroundColor: '#4c8bf5',
            },
        ],
    });
    const [recentOrders] = useState<any[]>([
        { id: 955, name: 'David', amount: 955, time: '3 Minutes ago' },
        { id: 2450.5, name: 'Maggie', amount: 2450.5, time: '1 Hour ago' },
        { id: 1075.95, name: 'Gabriel', amount: 1075.95, time: '5 Minutes ago' },
        { id: 640, name: 'Samantha', amount: 640, time: '1 Day ago' },
        { id: 455.25, name: 'Daniel', amount: 455.25, time: '10 Minutes ago' },
        { id: 435.99, name: 'Avery', amount: 435.99, time: '1 Hour ago' },
    ]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Daily Revenue',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value: number | string) {
                        if (typeof value === 'number') {
                            return `$${value.toLocaleString()}`;
                        }
                        return value;
                    },
                },
            },
        },
    };

    return (
        <div className="analytics-container">
            <Sidebar />
            <div className="mains-content">
                {/* Thẻ thống kê */}
                <div className="stat-cards">
                    <div className="stat-card">
                        <h2>${dailyRevenue.toLocaleString()}</h2>
                        <p>Daily Revenue</p>
                        <div className="change-indicator">+8%</div>
                    </div>
                    <div className="stat-card">
                        <h2>${totalRevenue.toLocaleString()}</h2>
                        <p>Total Revenue</p>
                        <div className="change-indicator">+2%</div>
                    </div>
                    <div className="stat-card">
                        <h2>{customers}</h2>
                        <p>Customers</p>
                        <div className="change-indicator">+11%</div>
                    </div>
                </div>

                <div className="dashboard-content">
                    {/* Biểu đồ doanh thu */}
                    <div className="chart-container">
                        <Bar data={chartData} options={options} />
                    </div>

                    {/* Recent Orders */}
                    <div className="recent-orders">
                        <h3>Recent Orders</h3>
                        <ul className="orders-list">
                            {recentOrders.map((order) => (
                                <li key={order.id} className="order-item">
                                    <div>
                                        <strong>${order.amount.toLocaleString()}</strong>
                                        <p>{order.name}</p>
                                    </div>
                                    <span>{order.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueAnalytics;
