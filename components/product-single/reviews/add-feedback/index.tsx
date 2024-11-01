import React, { useState } from 'react';
import { postData } from '../../../../utils/services'; 
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'; // Nhớ import CSS của react-rater

type AddFeedbackProps = {
  productId: string;
  userId: string;
  onFeedbackAdded: () => void; // Callback khi feedback được thêm thành công
};

const AddFeedback: React.FC<AddFeedbackProps> = ({ productId, userId, onFeedbackAdded }) => {
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const feedbackData = {
      description,
      rating,
      userId,
      productId,
    };

    if (!description || rating <= 0) {
      setError('Please enter a description and a valid rating.');
      return;
    }

    try {
      await postData('/Feedbacks/AddFeedback', feedbackData);
      setDescription('');
      setRating(0);
      onFeedbackAdded(); // Gọi callback để làm mới dữ liệu
    } catch (err) {
      setError('Failed to add feedback');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-feedback">
      <h2 className="add-feedback__title">Add Feedback</h2>
      {error && <p className="add-feedback__error">{error}</p>}
      <form className="add-feedback__form" onSubmit={handleSubmit}>
        <textarea
          className="add-feedback__description"
          placeholder="Enter your feedback here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <div className="add-feedback__rating">
          <h3>Select a rating:</h3>
          <Rater
            total={5} // Tổng số sao
            rating={rating} // Rating hiện tại
            onRate={({ rating }) => setRating(rating)} // Cập nhật rating khi chọn
            //style={{ fontSize: '30px' }}
          />
        </div>

        <button type="submit" className="add-feedback__submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default AddFeedback;
