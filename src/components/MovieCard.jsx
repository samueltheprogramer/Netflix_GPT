import React from "react";
import { IMG_BASE_URL } from "../utils/variables";

const MovieCard = ({ moviesPosterPath }) => {
  if (!moviesPosterPath) return;
  return (
    <div className="  w-36 h-32 rounded-md ">
      <img
        className="w-36 h-32 rounded-md "
        src={`${IMG_BASE_URL}${moviesPosterPath}`}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
