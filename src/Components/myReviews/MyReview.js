import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import { fetchReviews } from "../review/ReviewSlice";
import MyReviewCard from "./MyReviewCard";

function MyReview() {
  const dispatch = useDispatch();
  const handymanId = JSON.parse(localStorage.getItem("profileId"));
  const allReviews = useSelector((state) => state.reviews.reviews);
  console.log(allReviews);

  useEffect(() => {
    dispatch(fetchReviews(localStorage.getItem("handyman")));
  }, [dispatch]);

  const myReviews = allReviews.filter(
    (review) => review.handyman_id === handymanId
  );
  console.log(myReviews);
  const reviewList = myReviews.map((review) => (
    <MyReviewCard key={review.id} review={review} />
  ));
  return (
    <div>
      <Header />
      {reviewList}
    </div>
  );
}

export default MyReview;
