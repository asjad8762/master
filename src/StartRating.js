import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onClickHandler = () => {
    setRating(0);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <>
            {/* <div> */}
            {/* <h1>Hello</h1> */}
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star" style={{ fontSize: "40px" }}>
                &#9733;
              </span>
            </button>
            {/* <button onClick={onClickHandler}>hello</button> */}
            {/* </div> */}
          </>
        );
      })}
    </div>
  );
};

export default StarRating;
