import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieLisData, title }) => {
  if (!movieLisData) return;
  if (!title) return;
  return (
    <div className=" flex flex-col pl-3  gap-2 w-full bg-black ">
      <h1 className="text-xl text-white mt-2">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar  ">
        <div className="flex gap-2 ">
          {movieLisData.map((movie) => (
            <MovieCard moviesPosterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
