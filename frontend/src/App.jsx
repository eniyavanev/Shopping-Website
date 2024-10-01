import React from "react";
import MainBody from "./Components/MainBody/MainBody";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <div>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
};

export default App;
