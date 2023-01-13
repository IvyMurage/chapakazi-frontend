import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
import { useDispatch } from "react-redux";
import { removeReview } from "./ReviewSlice";

function ReviewCard() {
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          doloribus necessitatibus eligendi placeat aliquam, eaque quae laborum
          veritatis magni assumenda, nemo, corrupti atque! Quod ut recusandae
          libero et, neque deleniti!
        </p>
        <div className="dislike-like">
          <FontAwesomeIcon icon={faThumbsUp} id="thumbs-up" />
          <FontAwesomeIcon icon={faThumbsDown} id="thumbs-down" />
          <span>0</span>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
