import React, { useState } from 'react';

const EditSup = ({ currentSup }) => {
  const [productName, setProductName] = useState(currentSup.productName);
  const [unitPrice, setUnitPrice] = useState(currentSup.unitPrice);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/sup/edit', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: currentSup.productId, productName, unitPrice }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={e => setProductName(e.target.value)}
      />
      <input
        type="number"
        value={unitPrice}
        onChange={e => setUnitPrice(e.target.value)}
      />
      <button type="submit">Cập nhật SUP</button>
    </form>
  );
};

export default EditSup;
