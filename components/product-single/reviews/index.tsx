import ReviewsList from './reviews-list';
//import Punctuation from './punctuation';
import { Feedback, ProductType } from '../../../types';
import AddFeedback from './add-feedback';
import React, { useEffect, useState } from 'react';
import { getData } from 'utils/services';

type ReviewsProductType = {
  show: boolean;
  product: ProductType;
}

const Reviews = ({ show, product }: ReviewsProductType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [userId, setUserInfo] = useState<string | null>(null);
  const loadFeedbacks = async (productId = '') => {
    const updatedProduct = await getData(`/Products/GetProductById/${productId}`);
    setFeedbacks(updatedProduct.feedbacks)
  };
  const handleFeedbackAdded = () => {
    loadFeedbacks(product.productId); // Tải lại danh sách feedback để hiển thị feedback mới nhất
  };
  useEffect(() => {
    // Chỉ gọi localStorage khi component đã được mount
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo).Id);
    }
    loadFeedbacks(product.productId); // Lấy danh sách feedback khi component được render
  }, [product.productId]);
  return (
    <section style={style} className="product-single__reviews">
      {/* <Punctuation 
        punctuation={product.punctuation.punctuation}
        countOpinions={product.punctuation.countOpinions}
        votes={product.punctuation.votes} 
      /> */}
      <AddFeedback productId={product.productId} userId={userId ?? ''} onFeedbackAdded={handleFeedbackAdded} />
      <ReviewsList feedbacks={feedbacks} />
    </section>
  );
};
  
export default Reviews;
    