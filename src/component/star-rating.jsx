import { useCallback, useEffect, useState } from "react";
import "./star-rating.style.css";

const StarRating = ({ maxRating = 5, onChange = () => {} }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  //NOTE - Improves performance by caching this logic based on currentRating,
  //       so this function doesn't re-render on change of currentRating.
  const setCurrentRatingHandler = useCallback(
    (ratingValue) =>
      ratingValue === currentRating
        ? setCurrentRating(0)
        : setCurrentRating(ratingValue),
    [currentRating]
  );

  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);

  return (
    <div className="container">
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
            &#9733;
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
