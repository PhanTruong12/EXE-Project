import Rater from 'react-rater';
import createMarkup from '../../../../utils/markup';
import { Feedback } from '../../../../types';
import React from 'react';

type ReviewsListType = {
  feedbacks: Feedback[];
}

const ReviewsList = ({ feedbacks }: ReviewsListType) => {

  return (
    <section className="reviews-list">
      {feedbacks.map((feedback, index) => (
        <div key={index} className="review-item">
          <div className="review__avatar">
            {/* <img src={ review.avatar } alt="avatar" /> */}
          </div>
          
          <div className="review__content">
            <span style={{ fontSize: '12px' }}>{new Date(feedback.ratingDate).toLocaleTimeString("vi-VN")} - 
              {new Date(feedback.ratingDate).toLocaleDateString("vi-VN", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <h3>{ feedback.user?.firstName } {feedback.user?.lastName}</h3>
            <Rater total={5} interactive={false} rating={feedback.rating} />
            <div className="review__comment" dangerouslySetInnerHTML={createMarkup(feedback.description)}>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
  
export default ReviewsList;
    