// components/ActionMenu.tsx
import React, { useState } from 'react';
import EditProductModal from './EditProductModal';
import { ProductType } from 'types';

interface ActionMenuProps {
  product: ProductType;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ product }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="action-menu">
      <button onClick={handleEdit} className="action-btn">...</button>
      {showEditModal && (
        <EditProductModal
          product={product}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ActionMenu;
