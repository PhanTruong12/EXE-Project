// components/sup-management/AddSup.tsx
import React, { useState } from 'react';
import { addSup } from '../../utils/fakeApi';

const AddSup = () => {
  const [productName, setProductName] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);

  const handleAddSup = () => {
    const newSup = {
      supId: `SUP${Date.now()}`,  // tạo ID giả
      supName: productName,
      description: 'Mô tả SUP',
      unitPrice,
      available: true,
      images: [],
    };

    const result = addSup(newSup);  // Sử dụng fake API
    console.log(result.message);     // Log phản hồi (hoặc cập nhật UI)

    // Xóa các trường nhập sau khi thêm thành công
    setProductName('');
    setUnitPrice(0);
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Tên SUP"
      />
      <input
        type="number"
        value={unitPrice}
        onChange={(e) => setUnitPrice(Number(e.target.value))}
        placeholder="Giá thuê"
      />
      <button onClick={handleAddSup}>Thêm SUP</button>
    </div>
  );
};

export default AddSup;
