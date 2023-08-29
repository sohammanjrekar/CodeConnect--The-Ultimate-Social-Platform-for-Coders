import React, { useState, useEffect } from "react";
import CodeReviewList from "../components/CodeReviewList";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/reviews/")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h1>Code Review Community</h1>
      <CodeReviewList reviews={reviews} />
    </div>
  );
};

export default Reviews;
