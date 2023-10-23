import { useState } from "react";
import "./star-rating.style.css";

const StarRating = () => {
  const maxRating = 5;
  const [currentRating, setCurrentRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const setCurrentRatingHandler = (ratingValue) =>
    ratingValue === currentRating
      ? setCurrentRating(0)
      : setCurrentRating(ratingValue);

  return (
    <div className="container">
      Current Rating : {currentRating}
      {[...Array(maxRating)].map((_, idx) => {
        const ratingValue = idx + 1;
        return (
          <p
            key={idx}
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setCurrentRatingHandler(ratingValue)}
            className={`star ${
              (hoveredRating || currentRating) >= ratingValue ? "active" : ""
            }`}
          >
            {idx + 1}
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
