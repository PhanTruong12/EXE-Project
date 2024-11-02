import React, { useEffect, useState } from 'react';

interface AddSupModalProps {
  onClose: () => void;
  onSave: (supData: { name: string; price: number; description: string; image: File | null; unitsInstock: string; accountId: string }) => void;
}

const AddSupModal: React.FC<AddSupModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [unitsInstock, setUnitsInstock] = useState('');
  const [accountId, setAccountId] = useState('');
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") ?? 'null');
    setAccountId(userInfo?.Id || '');
  }, []);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setPrice('');
    } else if (/^\d+$/.test(value)) {
      setPrice(Number(value));
    }
  };

  const handleSave = () => {
    if (typeof price === 'number') {
      onSave({ name, price, description, image, unitsInstock, accountId });
      onClose();
    } else {
      alert("Please Input Number Price");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input 
            type="text" 
            value={price === '' ? '' : price.toString()} 
            onChange={handlePriceChange} 
            inputMode="numeric" 
            pattern="[0-9]*"
          />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Price:
          <input 
            type="text" 
            value={unitsInstock === '' ? '' : unitsInstock.toString()} 
            onChange={(e) => setUnitsInstock(e.target.value)}
            inputMode="numeric" 
            pattern="[0-9]*"
          />
        </label>
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <div className="modal-actions">
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddSupModal;
