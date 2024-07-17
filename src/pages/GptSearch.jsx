import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestion from "../components/GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
