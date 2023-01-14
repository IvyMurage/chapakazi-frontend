import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
import { useDispatch } from "react-redux";
import { downVoteReview, removeReview, upVoteReview } from "./ReviewSlice";

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");

  function handleDelete(reviewId) {
    dispatch(removeReview(reviewId, token));
  }

  function handleUpVote(reviewId, votes) {
    dispatch(upVoteReview(reviewId, token, votes));
  }

  function handleDownVote(reviewId, votes) {
    dispatch(downVoteReview(reviewId, token, votes));
  }

  return (
    <>
      <div className="review-body">
        <FontAwesomeIcon
          icon={faTrash}
          id="trash-can"
          onClick={() => handleDelete(review.id)}
        />
        <p>{review.comment}</p>
        <div className="dislike-like">
          <FontAwesomeIcon
            icon={faThumbsUp}
            id="thumbs-up"
            onClick={() => handleUpVote(review.id, review.votes)}
          />
          <FontAwesomeIcon
            icon={faThumbsDown}
            id="thumbs-down"
            onClick={() => handleDownVote(review.id, review.votes)}
          />
          <span>{review.votes}</span>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
