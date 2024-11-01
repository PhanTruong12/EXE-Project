// pages/api/revenue.ts

import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const revenueData = [
        { month: 'January', revenue: 10000000 },
        { month: 'February', revenue: 12000000 },
        { month: 'March', revenue: 15000000 },
        { month: 'April', revenue: 17000000 },
        { month: 'May', revenue: 20000000 },
        { month: 'June', revenue: 25000000 },
        // Thêm dữ liệu cho các tháng khác nếu cần
    ];
    res.status(200).json(revenueData);
};

export default handler;
