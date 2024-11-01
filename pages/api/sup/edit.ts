import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { productId, productName, unitPrice, thumb } = req.body;
    console.log('Product Info:', { productId, productName, unitPrice, thumb });
    // Logic cập nhật SUP trong database
    res.status(200).json({ message: 'SUP đã được cập nhật thành công!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
