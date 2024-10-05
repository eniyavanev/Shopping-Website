import React from "react";
import MainBody from "./Components/MainBody/MainBody";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import SingleProductDetails from "./Pages/ProductDetails/SingleProductDetails";
import SearchProduct from "./Pages/SearchProduct/SearchProduct";
import DarkModeToggle from "./Pages/SearchProduct/SearchProduct";

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
        {
          path: "/product/:id",
          element: < SingleProductDetails/>,
        },{
          path:"/search/:search",
          element:<SearchProduct/>
        }
        
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
