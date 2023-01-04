import React from "react";
import "./Review.css";
function ReviewForm() {
  return (
    <div id="review-form-container">
      <form className="review-form">
        <h3>Add a Review</h3>
        <textarea cols="50" rows="10" />
        <div className="review-form-btn">
          <button className="btn-review">Cancel</button>
          <button className="btn-review">Submit Review</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
