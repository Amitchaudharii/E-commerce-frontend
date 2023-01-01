import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, review }) => {
  const ratingStar = Array.from({ length: 5 }, (value, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-[#ff6000]" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-[#ff6000]" />
        ) : (
          <AiOutlineStar className="text-[#ff6000]" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="flex items-center justify-start my-5">
        {ratingStar}{" "}
        <span className="ml-5 text-sm text-blue-500">
          {review} Customer Review
        </span>
      </div>
    </>
  );
};

export default Star;
