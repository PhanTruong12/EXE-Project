// components/EditProductModal.tsx
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  status: string;
  hireDate: string | null;
  hireTime: string | null;
}

interface EditProductModalProps {
  product: Product;
  onClose: () => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ product, onClose }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(product.status);
  const [hireDate, setHireDate] = useState(product.hireDate);
  const [hireTime, setHireTime] = useState(product.hireTime);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Product</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
          Hire Date:
          <input type="date" value={hireDate || ''} onChange={(e) => setHireDate(e.target.value)} />
        </label>
        <label>
          Hire Time:
          <input type="text" value={hireTime || ''} onChange={(e) => setHireTime(e.target.value)} placeholder="08:00 - 12:00" />
        </label>
        <div className="modal-actions">
          <button className="save-button">Save</button> {/* Nút Save chỉ là hình thức */}
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
