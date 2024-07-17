import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { GptSuggestionMovieName, GptSuggestionTmdbMovieData } = useSelector(
    (store) => store.gpt
  );

  if (!GptSuggestionMovieName) return;
  if (!GptSuggestionTmdbMovieData) return;
  console.log(GptSuggestionMovieName);
  console.log(GptSuggestionTmdbMovieData);
  return (
    <div className="z-10  absolute w-full">
      <div>
        <h1 className="text-blue-900 bg-white w-full text-xl text-center ">
          SerachResults :
          {GptSuggestionMovieName.map((name) => (
            <>
              {name}
              <span> ,</span>
            </>
          ))}
        </h1>
      </div>
      {GptSuggestionMovieName.map((movie, index) => (
        <MovieList
          title={movie}
          movieLisData={GptSuggestionTmdbMovieData[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
