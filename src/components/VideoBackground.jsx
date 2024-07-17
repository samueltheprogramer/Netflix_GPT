import React from "react";
import { useSelector } from "react-redux";

import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useVideoBackground(movieId);

  return (
    <div className="py-10 sm:w-full  sm:py-0 sm:relative ">
      <div className=" w-full   frame-container">
        <iframe
          className="w-full      aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&rel=0&loop=1&controls=0&playlist=${trailerVideo?.key}`}
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
