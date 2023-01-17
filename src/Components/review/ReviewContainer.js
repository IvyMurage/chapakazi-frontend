import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { fetchReviews } from "./ReviewSlice";

function ReviewContainer({ profileId }) {
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");
  const customer = localStorage.getItem("customer");
  const reviews = useSelector((state) => state.reviews.reviews);

  function handleReviewAdd() {
    setTrigger((prevState) => !prevState);
  }

  useEffect(() => {
    dispatch(fetchReviews(token));
  }, [dispatch, token]);

  const handymanReviews = reviews.filter(
    (review) => review.handyman_id === profileId
  );
  console.log(handymanReviews);
  const reviewsList = handymanReviews.map((review) => (
    <ReviewCard key={review.id} review={review} />
  ));

  return (
    <div className="review-container">
      <div className="top-review-header">
        <div className="top-review-header-left">
          <h3>Reviews</h3>
        </div>
        <div className="top-review-header-right">
          <button onClick={handleReviewAdd}>Add a Review</button>
        </div>
      </div>
      {reviewsList}
      {trigger ? (
        <ReviewForm setTrigger={setTrigger} profileId={profileId} />
      ) : null}
    </div>
  );
}

export default ReviewContainer;
