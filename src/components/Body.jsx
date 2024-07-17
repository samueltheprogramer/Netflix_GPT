import React from "react";
import LogIn from "../pages/LogIn";
import Browse from "../pages/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//use Body component for
//Router purupose only

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
