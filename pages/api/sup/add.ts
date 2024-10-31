import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { productId, productName, unitPrice, thumb } = req.body;

    
    console.log('Product Info:', { productId, productName, unitPrice, thumb });

    // Giả lập lưu SUP vào database (giả sử có database)
    res.status(201).json({ message: 'SUP đã được thêm thành công!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
