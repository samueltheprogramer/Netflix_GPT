import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    GptSuggestionMovieName: null,
    GptSuggestionTmdbMovieData: null,
  },
  reducers: {
    toggleGptsearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSuggestionMovieName: (state, action) => {
      state.GptSuggestionMovieName = action.payload;
    },
    addGptSuggestionTmdbMovieData: (state, action) => {
      state.GptSuggestionTmdbMovieData = action.payload;
    },
  },
});

export const {
  toggleGptsearchView,
  addGptSuggestionMovieName,
  addGptSuggestionTmdbMovieData,
} = gptSlice.actions;
export default gptSlice.reducer;
