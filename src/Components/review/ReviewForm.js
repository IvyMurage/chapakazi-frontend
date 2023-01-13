import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Review.css";
import { addReview } from "./ReviewSlice";
function ReviewForm({ setTrigger }) {
  const [review, setReview] = useState({
    comment: "",
  });

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setReview({ ...review, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addReview(review, token));
    setReview({
      comment: "",
    });
  }

  return (
    <div id="review-form-container">
      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Add a Review</h3>
        <hr />
        <br />
        <textarea
          cols="50"
          rows="10"
          value={review.comment}
          onChange={handleChange}
          name="comment"
        />
        <div className="review-form-btn">
          <button
            className="btn-review"
            onClick={() => setTrigger((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn-review">Submit Review</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
