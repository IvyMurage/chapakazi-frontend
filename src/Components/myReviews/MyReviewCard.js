import React from "react";

function MyReviewCard({ review }) {
  return (
    <div>
      <p>{review.comment}</p>
    </div>
  );
}

export default MyReviewCard;
