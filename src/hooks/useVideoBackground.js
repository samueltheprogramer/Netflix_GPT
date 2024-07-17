import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/variables";
import { addTrailerVideo } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const useVideoBackground = (movieId) => {
    const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const movieTrailerVideo = await json.results.filter(
      (item) => item.type === "Trailer"
    );
    dispatch(addTrailerVideo(movieTrailerVideo[1]));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useVideoBackground;
