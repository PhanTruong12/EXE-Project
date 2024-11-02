// components/EditProductModal.tsx
import React, { useState } from 'react';
import { ProductType } from 'types';
import { postData } from 'utils/services';

interface EditProductModalProps {
  product: ProductType;
  onClose: () => void;
}


const EditProductModal: React.FC<EditProductModalProps> = ({ product, onClose }) => {
  const [productName, setName] = useState(product.productName);
  const [unitPrice, setPrice] = useState<string | number>(product.unitPrice);
  const [description, setDescription] = useState(product.description);
  const [unitsInstock, setUnitsInstock] = useState<string | number>(product.unitsInstock);

  const onSubmit = async (productId: string) => {
    await postData(`/Products/UpdateProduct`, {
      productId,
      productName: productName,
      description: description,
      unitPrice: unitPrice,
      unitsInstock: unitsInstock
    });

  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Product</h2>
        <label>
          Name:
          <input type="text" value={productName} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={unitPrice} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Hire Date:
          <input type="date" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Hire Time:
          <input type="text" value={unitsInstock } onChange={(e) => setUnitsInstock(e.target.value)} />
        </label>
        <div className="modal-actions">
          <button onClick={() => onSubmit(product.productId)} className="save-button">Save</button>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
