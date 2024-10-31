// components/sup-management/ListSup.tsx
import React, { useEffect, useState } from 'react';
import { getSupList } from '../../utils/fakeApi';
import { FakeSupType } from '../../types';

const ListSup = () => {
  const [supList, setSupList] = useState<FakeSupType[]>([]);

  useEffect(() => {
    const data = getSupList(); // Lấy danh sách SUP từ "localStorage"
    setSupList(data);
  }, []);

  return (
    <div>
      <h2>Danh sách SUP của bạn</h2>
      <ul>
        {supList.map((sup) => (
          <li key={sup.supId}>
            {sup.supName} - Giá thuê: {sup.unitPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSup;
