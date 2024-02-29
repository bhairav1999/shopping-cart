import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Cart from "../components/pages/Cart";
import Product from "../components/pages/Product";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
