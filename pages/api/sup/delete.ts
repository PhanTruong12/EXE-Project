import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { productId } = req.body;
    console.log('Product Info:', { productId});
    // Logic xóa SUP từ database
    res.status(200).json({ message: 'SUP đã được xóa thành công!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
