import React, { useState } from 'react';

interface AddSupModalProps {
  onClose: () => void;
  onSave: (supData: { name: string; price: string; description: string; image: File | null }) => void;
}

const AddSupModal: React.FC<AddSupModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = () => {
    onSave({ name, price, description, image });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New SUP</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
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
