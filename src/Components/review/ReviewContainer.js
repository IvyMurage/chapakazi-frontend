import React, {useState} from "react";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm"
function ReviewContainer() {
  const [trigger, setTrigger] = useState(false);

  function handleReviewAdd() {
    setTrigger((prevState) => !prevState);
  }


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
      <ReviewCard />
      {trigger ? <ReviewForm setTrigger={setTrigger}/> : null}
    </div>
  );
}

export default ReviewContainer;
