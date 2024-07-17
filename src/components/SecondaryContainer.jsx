import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  if (!nowPlayingMovies) return;
  if (!popularMovies) return;
  if (!topRatedMovies) return;
  if (!upcomingMovies) return;
  return (
    <div className="sm:-mt-40 sm:w-full sm:absolute">
      <MovieList movieLisData={nowPlayingMovies} title={"Now Playing movies"} />
      <MovieList movieLisData={topRatedMovies} title={"Top Rated Movies"} />
      <MovieList movieLisData={popularMovies} title={"Popular movies"} />
      <MovieList movieLisData={upcomingMovies} title={"Upcoming"} />
    </div>
  );
};

export default SecondaryContainer;
