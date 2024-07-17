import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center  w-96  pt-5  z-20 sm:absolute sm:pt-36 sm:pl-10 ">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-white text-3xl font-bold  bg-black bg-opacity-15 rounded-3xl text-center">
          {title}
        </h1>
        <p className="text-white text-sm bg-black bg-opacity-15 rounded-3xl text-enter hidden sm:block">
          {overview}
        </p>
      </div>
      <div className="flex gap-5 p-1 justify-center">
        <button className="bg-gray-400 px-4 py-1 text-black font-bold rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-400 px-4 py-1 text-black font-bold rounded-lg hover:bg-opacity-50">
          <span className="border text-white border-white px-2   rounded-full">
            i
          </span>{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
