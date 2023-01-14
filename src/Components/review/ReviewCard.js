import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
import { useDispatch } from "react-redux";
import { removeReview } from "./ReviewSlice";

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");
  function handleDelete(reviewId) {
    dispatch(removeReview(reviewId, token));
  }
  return (
    <>
      <div className="review-body">
        <FontAwesomeIcon
          icon={faTrash}
          id="trash-can"
          onClick={() => handleDelete()}
        />
        <p>{review.comment}</p>
        <div className="dislike-like">
          <FontAwesomeIcon icon={faThumbsUp} id="thumbs-up" />
          <FontAwesomeIcon icon={faThumbsDown} id="thumbs-down" />
          <span>{review.votes}</span>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
