import React, { useRef } from "react";
import { API_OPTIONS, GEMINI_API_KEY, LOGIN_BG_IMG } from "../utils/variables";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch } from "react-redux";
import {
  addGptSuggestionMovieName,
  addGptSuggestionTmdbMovieData,
} from "../redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  // create ing a google gemini api interface
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  //gg
  const InputSearchText = useRef(null);
  const handleGptSearchClick = () => {
    aiRun();
  };

  const searchMoviesTmdb = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // Getting responce from grmini api model
  async function aiRun() {
    const prompt = `Act as a movie recomendation system ,  give only 5 movie names realated to   ${InputSearchText.current.value} like this in single line   example="Vikram, Master, Anniyan, Kaithi, Bigil" `;
    const result = await model.generateContent(prompt);

    const response = await result.response;
    const text = await response.text();
    console.log(text);
    const textArray = text.split(",");
    console.log(textArray);
    dispatch(addGptSuggestionMovieName(textArray));
    const promisArray = textArray.map((movies) => searchMoviesTmdb(movies));
    const tmbdSearch = await Promise.all(promisArray);
    dispatch(addGptSuggestionTmdbMovieData(tmbdSearch));
  }

  return (
    <div className="w-full   flex justify-center">
      <img
        className="absolute brightness-75  bg-cover w-full h-screen z-0 object-cover "
        src={LOGIN_BG_IMG}
        alt="Browse BG img"
      />
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className=" flex flex-col gap-2 p-5 z-10 mt-5 bg-black items-center  justify-center rounded-lg  sm:mt-36  "
      >
        <div>
          <h1 className="text-center text-white sm:inline-block">
            hint: This search is powerd by
          </h1>
          <h1 className="text-center text-white sm:inline-block pl-1">
            Google Gemini AI
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            className="w-[350px] p-3 rounded-lg"
            ref={InputSearchText}
            type="text"
            placeholder="What would you like to watch today ?"
          />
          <button
            onClick={handleGptSearchClick}
            className=" w-[350px]  text-white  bg-red-700 rounded-lg py-2 px-4 sm:w-32"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
