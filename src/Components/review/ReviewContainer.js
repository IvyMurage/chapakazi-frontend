import React from "react";
import "./Review.css";
import ReviewCard from "./ReviewCard";
function ReviewContainer() {
  return (
    <div className="review-container">
      <div className="top-review-header">
        <div className="top-review-header-left">
          <h3>Reviews</h3>
        </div>
        <div className="top-review-header-right">
          <button>Add a Review</button>
        </div>
      </div>
      <ReviewCard />
    </div>
  );
}

export default ReviewContainer;
