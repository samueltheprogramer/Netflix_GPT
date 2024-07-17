import React from "react";
import Header from "../components/Header";
import useBrowser from "../hooks/useBrowser";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Fotter from "../components/Fotter";

const Browse = () => {
  //All logics of browser components
  const Gpt_toggle = useSelector((store) => store.gpt.showGptSearch);

  useBrowser();
  return (
    <div className="">
      <Header />
      {Gpt_toggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Fotter/>
        </>
      )}
    </div>
  );
};

export default Browse;
