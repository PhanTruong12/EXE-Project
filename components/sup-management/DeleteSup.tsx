import React from 'react';

const DeleteSup = ({ productId }) => {
  const handleDelete = async () => {
    await fetch('/api/sup/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
  };

  return <button onClick={handleDelete}>Xóa SUP</button>;
};

export default DeleteSup;
