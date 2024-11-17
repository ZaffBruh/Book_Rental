import React from "react";

const Review = () => {
  return (
    <div className="review">
      <h1>Book Reviews</h1>
      <div className="review-card">
        <h3>The Great Gatsby</h3>
        <p>
          A tragic tale of the American Dream. What did you think of Gatsby's journey?
        </p>
      </div>
      <div className="review-card">
        <h3>To Kill a Mockingbird</h3>
        <p>Discuss the impact of Harper Lee's masterpiece on racial justice.</p>
      </div>
    </div>
  );
};

export default Review;
