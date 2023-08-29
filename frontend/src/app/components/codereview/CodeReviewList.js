import React from "react";

const CodeReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Code Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.title}</h3>
            <pre>{review.code}</pre>
            <p>Author: {review.author.username}</p>
            <p>
              Reviewers:{" "}
              {review.reviewers.map((reviewer) => reviewer.username).join(", ")}
            </p>
            <p>Comments: {review.comments}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeReviewList;
